import { getHeroById } from "../../../src/heroes/helpers/getHeroById";

describe("Pruebas en getHeroById", () => {
  test("Debe seleccionar un heroe por su id", () => {
    const heroId = "marvel-spider";

    const hero = getHeroById(heroId);

    expect(hero).toEqual({
      id: "marvel-spider",
      superhero: "Spider Man",
      publisher: "Marvel Comics",
      alter_ego: "Peter Parker",
      first_appearance: "Amazing Fantasy #15",
      characters: "Peter Parker",
    });
  });
});
