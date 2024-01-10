import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    //Agrego el objeto que quiero comprobar
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    //creo una variable con la funcion que quiero probar que retorne un objeto y le paso el objeto testuser.
    const user = getUser(testUser);

    //y aqui finalmente hago la ejecucion de la prueba.
    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const name = "Gabriela";

    const testUsuarioActivo = {
      uid: "ABC567",
      username: name,
    };

    const user = getUsuarioActivo(name);

    expect(user).toStrictEqual(testUsuarioActivo);
  });
});
