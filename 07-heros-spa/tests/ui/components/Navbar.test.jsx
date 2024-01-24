import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../src/ui/components";
import { AuthContext } from "../../../src/auth";

const mockedUseNavigate = jest.fn();

//Esto basicamente llama a una funcion y el valor de retorno es lo que se quiere utilizar para la desestructuracion de estas piezas ( MemoryRouter,  useNavigate), podemos colocar
//Que cuando vayamos a mandar a llamar el mock de esta libreria (react-router-dom) voy a mandar a llamar a una funcion e implicitamente vamos a regresar un objeto
jest.mock("react-router-dom", () => ({
  //Como debemos proporcionar el Memory Router y cualquier otra cosa que el "react-router-dom" use, para no hacer mock de todo eso hacemos lo siguiente con el spread operator:
  ...jest.requireActual("react-router-dom"), //Esto quiere decir que tome todo lo que xporte la libreria usando el operador spread, tomando todo lo que tiene y sobreescribiendo
  //solo el useNavigate en este caso

  //Aqui llamamos a la funcion, en este caso , el useNavigate; como sabemos que el hook es una funcion (incluso puede recibir argumentos de ser el caso), creamos un mock de dicho hook
  //Con esto cuando se mande a llamar el useNavigate, en lugar de regresar su funcionalidad real/propia, va a regresar la funcion mock que ya se ha creado
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en <Navbar/>", () => {
  const contextValue = {
    logged: true,
    user: {
      id: "ABC",
      name: "Juan",
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test("debe de mostrar el nombre del user loggeado", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    // screen.debug();

    expect(screen.getByText("Juan")).toBeTruthy();
  });

  test("Debe de llamar al logout y navigate cuando se hace click en el boton", () => {
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const logoutButton = screen.getByRole("button");

    fireEvent.click(logoutButton);

    //Confirmamos que la funcion logout haya sido llamada al hacer click en el boton
    expect(contextValue.logout).toHaveBeenCalled();

    //Confirmamos que el useNavigate haya sido llamado y haya hecho la redireccion al login
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
