import { fireEvent, render, screen } from "@testing-library/react";
import LoginPage from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en <LoginPage/>", () => {
  const user = { id: 123, name: "Juan", email: "juan@google.com" };

  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    screen.debug();

    const preTag = screen.getByLabelText("pre");

    expect(preTag.innerHTML).toBe("null");
  });

  test("Debe llamar a la funcion setUser al hacer click en el login button con el debido argumento", () => {
    const setUserMock = jest.fn();

    render(
      //Aqui le mandamos los valores que dnecesita el contexto, en este caso seria la info de user, junto a la funcion que cambia su estado "setUser"
      <UserContext.Provider value={{ user: user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    screen.debug();

    const loginButton = screen.getByRole("button");

    fireEvent.click(loginButton);

    expect(setUserMock).toHaveBeenCalledWith(user);
  });
});
