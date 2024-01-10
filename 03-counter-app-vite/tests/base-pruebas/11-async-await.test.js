import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en 11-async-await.js", () => {
  test("getImagen debe de retornar un URL de la imagen", async () => {
    //Recordar que los await deben ir dentro de una funcion async.
    const url = await getImagen();
    expect(typeof url).toBe("string");
  });
});
