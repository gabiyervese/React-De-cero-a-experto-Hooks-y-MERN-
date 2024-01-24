import { Route, Routes } from "react-router-dom";
import HerosRoutes from "../heroes/routes/HerosRoutes";
import { LoginPage } from "../auth/pages";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          //path="login"
          path="login/*"
          element={
            <PublicRoute>
              {/* <LoginPage /> */}
              <Routes>
                {/* De esta forma se usaria cuando tenemos varias rutas explisitas por escribir y en los params inician por login/blabla */}
                <Route path="/*" element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        />

        {/* Aqui colocamos nuestras rutas privadas */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HerosRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
