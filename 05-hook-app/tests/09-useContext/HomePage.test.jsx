import { render, screen } from "@testing-library/react";
import HomePage from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en el componente de <HomePage/>", () => {
  const user = {
    id: 1,
    name: "Fernando",
  };

  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    screen.debug();

    //Seleccionamos el elemento pre
    const preTag = screen.getByLabelText("pre"); //Ocurre lo mismo que con 'span', lo seleccionamos a traves de aria-label

    //confirmamos que en el elemento pre este el texto null.
    expect(preTag.innerHTML).toBe("null");
  });

  test("Debe de mostrar el componente con el usuario", () => {
    render(
      <UserContext.Provider value={{ user: user }}>
        <HomePage />
      </UserContext.Provider>
    );
    screen.debug();

    //Seleccionamos el elemento pre
    const preTag = screen.getByLabelText("pre"); //Ocurre lo mismo que con 'span', lo seleccionamos a traves de aria-label

    //confirmamos que en el elemento pre se encuentre la info del user.
    expect(preTag.innerHTML).toContain(user.id.toString());
    expect(preTag.innerHTML).toContain(user.name);

    //Comprobamos que de haber info del user se mustre en la tag <small></small>
    const smallTag = screen.getByLabelText("small");
    expect(smallTag.innerHTML).toBe("Fernando");
  });
});
