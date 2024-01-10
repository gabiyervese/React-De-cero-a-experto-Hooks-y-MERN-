import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 09-promesas", () => {
  //el done es una funcion que vanmos a llamar cuando se termina de ejecutar el codigo y esto le dice a jest que ya ha terminado. Pero si no mandamos el done y dejamos el argumento Jest se queda esperando y lanza un error.
  test("getHeroeByIdAsync debe retornar un heroe ", (done) => {
    const id = 1;

    const hero = getHeroeById(id);
    console.log(hero);

    hero.then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });

      done();
    });
  });
});
