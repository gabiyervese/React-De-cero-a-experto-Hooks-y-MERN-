import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const onLogin = () => {
    //Aqui obtengo la ultima ruta visitada del local Storage y si no hubo nada coloco por default "/".
    const lastPath = localStorage.getItem("lastPath") || "/";

    login("Gabriela Yervese");

    //Aqui al hacer login en vez de redirigirlo directamente al "/", utilizo la ultima ruta como direccion.
    navigate(lastPath, {
      //usamos el "replace" en true para reemplazar el historial porque no queremos que el user pueda retroceder al login si ya se ha logueado.
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
