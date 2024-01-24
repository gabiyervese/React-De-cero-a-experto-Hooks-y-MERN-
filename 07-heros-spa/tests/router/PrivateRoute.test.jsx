import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe("Pruebas en <PrivateRoute/>", () => {
  test("Debe mostrar el children si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "ABC",
        name: "Gabriela",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <PrivateRoute>
            <h1>Soy una ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    //screen.debug();

    //Confirmamos que aparezca el texto definido como prueba para children, que exista. Con esto verificamos que cualquier children se mostrara con autenticacion.
    expect(screen.getByText("Soy una ruta privada")).toBeTruthy();
  });

  test("Debe de navegar al login si el user no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        {/* Simulamos la ruta en la que estamos actualmente */}
        <MemoryRouter initialEntries={["/marvel"]}>
          {/* En este caso tenemos que hacer este sistema de rutas porque si colocamos solo el home de marvel hara un bucle infinito ya que esta tratando todo el tiempo de entrar a marvel, entonces debemos de colocar la ruta alternativa a la de marvel que es login. Recordemos que en este caso cuando se esta autenticado puedes ver la pagina de marvel y cuando no solo puedes ver la del login  */}
          <Routes>
            <Route
              path="marvel"
              element={
                <PrivateRoute>
                  <h1>Soy una ruta publica</h1>
                </PrivateRoute>
              }
            />

            <Route path="login" element={<h1>Pagina de login</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    //screen.debug();

    expect(screen.getByText("Pagina de login")).toBeTruthy();
  });

  test("Debe llamar al localStorage para verificar la ultima ruta visitada antes de hacer logout", () => {
    //Para simular un prototipo del localStorage ya sea get o set usamos esta forma:
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: "ABC",
        name: "Gabriela",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/search?q=batman"]}>
          <PrivateRoute>
            <h1>Soy la pagina de Batman</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    screen.debug();

    //Confirmamos que haya sido llamado el localStorage
    expect(localStorage.setItem).toHaveBeenCalled();

    //Confirmamos que haya sido llamado el localStorage con los argumentos necesarios ya definidos, en esta caso la ultima ruta visitada "lastPath" y la ruta en la que nos encontramod "/search?q=batman".
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      "/search?q=batman"
    );
  });
});
