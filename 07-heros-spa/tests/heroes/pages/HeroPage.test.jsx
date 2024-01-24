import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HeroPage } from "../../../src/heroes/pages";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),

  useNavigate: () => mockedUseNavigate,
}));

beforeEach(() => jest.clearAllMocks());

describe("Pruebas en <HeroPage/>", () => {
  const heroId = "marvel-spider";

  test("Debe mostrar la pagina del heroe con su id en el query param, si existe", () => {
    render(
      <MemoryRouter initialEntries={[`/hero/${heroId}`]}>
        <Routes>
          <Route path="/hero/:heroId" element={<HeroPage />} />
        </Routes>
      </MemoryRouter>
    );

    //screen.debug();
  });

  test("Debe de llamar al navigate para volver a la pantalla de la lista de heroes", () => {
    render(
      <MemoryRouter initialEntries={[`/hero/${heroId}`]}>
        <Routes>
          <Route path="/hero/:heroId" element={<HeroPage />} />
        </Routes>
      </MemoryRouter>
    );

    const returnButton = screen.getByRole("button");

    fireEvent.click(returnButton);

    expect(mockedUseNavigate).toHaveBeenCalled();
  });

  test("Si no se encuentra el id del heroe debe mostrar la pagina de marvel", () => {
    render(
      <MemoryRouter initialEntries={[`/hero/noexisto`]}>
        <Routes>
          <Route path="/hero/:heroId" element={<HeroPage />} />
          <Route path="marvel" element={<h1>Página Marvel</h1>} />
        </Routes>
      </MemoryRouter>
    );

    //screen.debug();
  });
});
