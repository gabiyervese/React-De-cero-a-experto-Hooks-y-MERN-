import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { types } from "../types/types";

//Esta funcion de inicializacion "init" se va a encargar de establecer esas propiedades iniciales que tendra el reducer.
const init = () => {
  //Hacemos el "parse" para que si este codigo regresa "null" entonces significa que no hay usuario, pero si regresa algun valor, entonces si hay usuario.
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    //Si el user existe sera "true"
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  //Aqui como estamos usando la funcion de inicializacion, el initialState sera un objeto vacio {}.
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  //Hago la funcion que controlara el login en la cual se describe la action y se despacha.
  const login = (name = "") => {
    const user = { id: "ABC", name };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };

  const logout = () => {
    //Borramos el 'user' del localStorage.
    localStorage.removeItem("user");

    const action = {
      type: types.logout,
    };

    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{ ...authState, login: login, logout: logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
