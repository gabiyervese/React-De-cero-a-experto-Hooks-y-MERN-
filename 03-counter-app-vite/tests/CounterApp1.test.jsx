const { render } = require("@testing-library/react");
import { CounterApp } from "../src/Components/CounterApp";

describe("Pruebas en <CounterApp />", () => {
  test("debe hacer match con el snapshot", () => {
    const name = "Sofia";
    //Renderiza nuestro componente de react en memoria, tambien retorna un objeto que contiene ciertas propiedades como container.
    const { container } = render(<CounterApp name={name} />);
    //Este metodo de ".toMAtchSnapshot" crea una carpeta al misno nivel de este archivo en el que lo uso, ahi habra una fotografia de lo que se renedrizo en ese componente.Esto sirve para verificar como se encuentra originalmente el componente y si alguien accidentalmente hace un cambio o falta algo lanza un error en el test. Ademas, te explica que falta y que se modifico con respecto a la fotografia del componente original. Si se quiere actualizar el snapshot se le da a la tecla U y se actualiza la fotografia.

    //Es decir, esta prueba se asegura de que mi componente no vaya a cambiar el dia de manana imprudentemente.
    // expect(container).toMatchSnapshot(); //si estoy en un proyecto en desarrollo usar el snapshot me dara dolro de cabeza ya que el proyecto estara en constante cambio, por lo que no es eficiente y no mantendra la estructura capturada por el snapshot todo el tiempo.
  }); //container es un elemento cualquiera del html/dom

  test("Debe de mostrar el nombre en un h2", () => {
    const name = "Mariana";

    //getByText obtiene algun nodo por algun texto. Es muy utiol para analizar rapidamente el DOM (es nuestro componente renderizado).Comprueba que en lo que renderizamos realmente exista ese elemento que le estamos pasando.
    const { container, getByText, getByTestId } = render(
      <CounterApp name={name} />
    );

    //Este metodo .toBeTruthy es decir que se encuentre efectivamente el nodo.
    expect(getByText(name)).toBeTruthy();

    // const h2 = container.querySelector("h2");
    // expect(h2.innerHTML).toBe(name); //aqui con el .toBe quiero que sea exactamente igual todo detalle en el elemento. Si quiero verificar que simplemente contenga algo puedo utilizar ".toContain".

    expect(getByTestId("test-title").innerHTML).toContain(name); //getByTestId tambien lo puedo sacar del render, y me ayuda a obtener el elemento con ese id que contenga lo que le indico, en este caso el name.
  });

  test("Debe de mostrar el value mandado por props", () => {
    const luckyNumber = "6";
    const value = 18;
    const { getByText, getAllByText } = render(
      <CounterApp luckyNumber={luckyNumber} value={value} />
    );

    // expect(getByText(luckyNumber)).toBeTruthy();
    expect(getAllByText(value).length).toBe(2);

    //si esperamos encontrar un elemento o mas usamos el getAllByText mejor. Esto regresa un array de elementos html
  });
});
