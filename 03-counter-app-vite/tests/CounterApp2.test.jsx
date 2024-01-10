const { render, screen } = require("@testing-library/react"); //screen es el objeto que estamos renderizando.
import { CounterApp } from "../src/Components/CounterApp";

//ESTAS PRUEBAS SON MAS LIMPIAS QUE EL COUNTERAPPTEST ANTERIOR.

describe("Pruebas en <CounterApp />", () => {
  const name = "Mariana";
  const value = 18;
  test("debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp name={name} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el nombre Mariana", () => {
    render(<CounterApp name={name} />);
    expect(screen.getByText(name)).toBeTruthy();
    //screen.debug() me muestra el objeto en consola.
  });

  test("Debe de mostrar el nombre en un h2", () => {
    render(<CounterApp name={name} />);
    expect(screen.getByRole("heading", { level: 2 })).toBeTruthy();
  });

  test("debe enviar el value enviado por props", () => {
    render(<CounterApp name={name} value={value} />);

    expect(screen.getAllByText(value).length).toBe(2);
  });
});
