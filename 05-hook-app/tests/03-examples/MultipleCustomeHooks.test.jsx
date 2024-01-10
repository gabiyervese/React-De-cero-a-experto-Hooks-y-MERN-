import { screen, render, fireEvent } from "@testing-library/react";
import MultipleCustomeHooks from "../../src/03-examples/MultipleCustomeHooks";
import { useFetch } from "../../src/Hooks/useFetch";
import { useCounter } from "../../src/Hooks/useCounter";

//Hacemos un simulacro de useFetch con jest.mock
jest.mock("../../src/Hooks/useFetch");
jest.mock("../../src/Hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks />", () => {
  //Esto lo coloco aqui para hacer que en todos los test se use el useCounter. No puedo colocarlo en un solo test y en los demas no, por eso en vez de repetir el codigo lo coloco en el padre de los tests, aunque en el que verdaderamente se utiliza es en el test que prueba la funcion de increment.
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  //Para asegurarnos de que cada funcion a la que estamos haciendo el mock sean resetadas a su estado inicial, usamos una parte del ciclo de vida de las pruebas.

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe mostrar el componente por defecto", () => {
    //Aqui regresamos lo que se espera que devuelva el elemento al que le estamos haciendo el mock, en este caso el useFetch. En este caso es el estado que tiene por defecto.
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomeHooks />);

    expect(screen.getByText("Loading..."));

    expect(screen.getByText("Breaking Bad quotes"));

    const nextButton = screen.getByRole("button", { name: "Next quote" });

    expect(nextButton.disabled).toBeTruthy();

    //screen.debug();
  });

  test("Debe de mostrar un Quote", () => {
    //Aqui regresamos lo que se espera que devuelva el elemento al que le estamos haciendo el mock, en este caso el useFetch. En este caso es el estado que tiene al mostrar el quote.
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomeHooks />);

    //screen.debug();

    expect(screen.getByText("Hola mundo")).toBeTruthy();
    expect(screen.getByText("Fernando")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeFalsy();
  });

  test("Debe de llamar a la funcion de incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomeHooks />);

    const nextButton = screen.getByRole("button", { name: "Next quote" });

    fireEvent.click(nextButton);
  });
});
