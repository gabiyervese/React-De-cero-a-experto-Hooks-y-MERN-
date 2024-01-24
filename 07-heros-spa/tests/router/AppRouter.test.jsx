import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";
import { AuthContext } from "../../src/auth";

describe("Pruebas en <AppRouter/>", () => {
  test("debe de mostrar el login si no está autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    // screen.debug();

    expect(screen.getAllByText("Login").length).toBe(2);
  });

  test("Debe de mostrar el componente de marvel si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "ABC",
        name: "Gabriela",
      },
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    //screen.debug();
    expect(screen.getByText("Marvel Comics")).toBeTruthy();
  });
});
