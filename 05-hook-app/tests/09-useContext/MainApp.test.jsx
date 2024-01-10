import { render, screen } from "@testing-library/react";
import MainApp from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <MainApp/>", () => {
  test("Debe de mostrar el HomePage", () => {
    render(
      //En React Router Dom nos facilitan el "MemoryRouter", el cual proporciona el href, el useLocation, el useHistory, sustituyendo al BrouserRouter que usa realmente nuestra aplicacion.
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    screen.debug();

    //Confirmo que exista un texto en el componente que coincida con "HomePage"
    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  //COMO SIMULAMOS RUTAS DIFERENTES? Ejemplo con LoginPage (para tstear si se esta en la "AboutPage" seria el mismo codigo cambiando la ruta)
  test("Debe de mostrar el LoginPage", () => {
    render(
      //Para hacer la simulacion del cambio de ruta usamos 'initialEntries", el cual es un [] el cual es el segmento del URL en el que nos encontramos (la ruta), en este caso el LoginPage.
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );

    screen.debug();

    //Confirmo que exista un texto en el componente que coincida con "LoginPage"
    expect(screen.getByText("LoginPage")).toBeTruthy();
  });
});
