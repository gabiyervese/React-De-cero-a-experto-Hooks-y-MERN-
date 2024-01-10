import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import AboutPage from "./AboutPage";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import UserProvider from "./context/UserProvider";

const MainApp = () => {
  return (
    <UserProvider>
      <NavBar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />

        {/* forma de redireccionar al user a una pagina cuando la que se intento ingresar no existe. */}
        {/* <Route path="/*" element={<LoginPage />} /> */}

        {/* Esta seria la forma mas usada de redireccionar*/}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </UserProvider>
  );
};

export default MainApp;
