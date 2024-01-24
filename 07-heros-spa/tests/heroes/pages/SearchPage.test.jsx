import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),

  useNavigate: () => mockedUseNavigate,
}));

beforeEach(() => jest.clearAllMocks());

describe("Pruebas en <SearchPage/>", () => {
  test("Debe de mostrarse correctamente con valores por default", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    //screen.debug();

    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar a Batman y el input con el valor del queryString", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );

    //screen.debug();

    const input = screen.getByRole("textbox");

    //Confirmamos que el value del input sea batman como en la query string
    expect(input.value).toBe("batman");

    const img = screen.getByRole("img");

    expect(img.src).toContain("/heroes/dc-batman.jpg");
  });

  test("Debe de mostrar el style del div 'search a hero' como none cuando haya un valor en la query string", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const searchHeroDiv = screen.getByLabelText("search a hero");

    //screen.debug();

    //Confirmo que este div tenga la clase display none mientras haya un valor en la query string.
    //PD: searchHeroDiv.style._values.display === searchHeroDiv.style.display
    expect(searchHeroDiv.style.display).toBe("none");
  });

  test("Debe de mostrar un error si no se encuentra el heroe", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=fegwef"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const noHeroFoundDiv = screen.getByLabelText("no hero found");

    expect(noHeroFoundDiv.style.display).toBe("");

    //screen.debug();
  });

  test("Debe de llamar el navigate hacia la pantalla nueva", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    //Simulamos que escribimos superman en el input
    fireEvent.change(input, {
      target: { name: "searchText", value: "superman" },
    });

    const form = screen.getByLabelText("form");
    //Simulamos que enviamos el form
    fireEvent.submit(form);

    //Confirmamos que el useNavigate sea llamado con su respectivo argumento el cual seria la query string "superman"
    expect(mockedUseNavigate).toHaveBeenCalledWith("?q=superman");
  });
});
