import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  //Para recordar la ultima pagina visitada al hacer login luego de habernos desloageado y que muestre esta ultima ruta visitada del uer hago esto.
  //Con destructuring obtengo el valor del pathname y el search de la localizacion actual.
  const { pathname, search } = useLocation();

  //guardo en una variable la ultima ruta concatenando los valores antes destructurados.
  const lastPath = pathname + search;

  //Finalmente, guardo en el localStorage esa ultima ruta visitada.
  localStorage.setItem("lastPath", lastPath);

  return logged ? children : <Navigate to="/login" />;
};
