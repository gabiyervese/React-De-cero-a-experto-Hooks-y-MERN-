const { render, screen, fireEvent } = require("@testing-library/react"); //screen es el objeto que estamos renderizando.
import { CounterApp } from "../src/Components/CounterApp";

describe("Pruebas basicas del componenete <CounterApp/>", () => {
  const luckyNumber = 6;
  const value = 18;

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp luckyNumber={luckyNumber} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial de 100 en el counter", () => {
    render(<CounterApp luckyNumber={luckyNumber} />);
    expect(screen.getByText(6)).toBeTruthy();
  });

  test("debe de incrementar con el boton +", () => {
    render(<CounterApp value={value} />);

    //fireEvent dispara el evento los metodos que tiene corresponden a los diferentes tipos de eventos y adentro del parentesis especificamos el lugar en el que ocurre el evento.
    fireEvent.click(screen.getByText("+"));
    //Aqui pruebo lo que espero recibir del evento.
    expect(screen.getByText("19")).toBeTruthy();
  });

  test("debe de decrementar con el boton -", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-"));
    expect(screen.getByText(17)).toBeTruthy();
  });

  test("debe de hacer reset con el boton Reset", () => {
    //sujeto de prueba
    render(<CounterApp value={value} />);
    //Aqui simulo el evento de click en el que le somo y cambio el estado del counter para luego probar el evento del reset a ver si coincide realmente con el valor inicial que le colocamos.
    //
    //accion de Estimulo
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("Reset"));
    //Asercion de comportamiento esperado
    expect(screen.getByText(18)).toBeTruthy();
  });
});
