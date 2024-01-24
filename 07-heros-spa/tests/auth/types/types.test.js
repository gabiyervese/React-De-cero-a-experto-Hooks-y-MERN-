import { types } from "../../../src/auth/types/types";

describe("Pruebas en 'Types.js' file", () => {
  test("Debe de regresar estos types", () => {
    //Confirmamos si los types son iguales al objeto de types que tengo en el file original. Esto lo hacemos para que las keys esten bien definidas y si alguien las escribe mal lance un error, si se da el caso de que no tengamos los valores de las keys definidos podemos colocar "anyString", lo que realmente importa es que las keys si esten siempre definidas.
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
