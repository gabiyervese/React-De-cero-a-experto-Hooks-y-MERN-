import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Pruebas en <PublicRoute/>", () => {
  test("Debe mostrar el children si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Soy una ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    //screen.debug();

    //Confirmamos que aparezca el texto definido como prueba para children, que exista. Con esto verificamos que cualquier children se mostrara sin autenticacion.
    expect(screen.getByText("Soy una ruta publica")).toBeTruthy();
  });

  test("Debe de navegar si el user esta autenticado", () => {
    const contextValue = {
      logged: true,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        {/* Simulamos la ruta en la que estamos actualmente */}
        <MemoryRouter initialEntries={["/login"]}>
          {/* En este caso tenemos que hacer este sistema de rutas porque si colocamos solo el login hara un bucle infinito ya que esta tratando todo el tiempo de entrar al login, entonces debemos de colocar la ruta alternativa a la del login. Recordemos que en este caso cuando se esta autenticado puedes ver la pagina de marvel y cuando no solo puedes ver la del login  */}
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Soy una ruta publica</h1>
                </PublicRoute>
              }
            />

            <Route path="marvel" element={<h1>Pagina de marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    screen.debug();

    expect(screen.getByText("Pagina de marvel")).toBeTruthy();
  });
});
