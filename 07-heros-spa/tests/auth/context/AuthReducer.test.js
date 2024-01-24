import { authReducer } from "../../../src/auth";
import { types } from "../../../src/auth/types/types";

describe("Pruebas en AuthReducer", () => {
  const state = {
    logged: false,
  };

  const user = {
    id: "ABC",
    name: "Gabriela",
  };

  test("Debe retornar el estado por defecto", () => {
    const newState = authReducer(state, {});

    expect(newState).toBe(state);
  });

  test("Debe de llamar el login, autenticar y establecer el user", () => {
    const action = {
      type: types.login,
      payload: user,
    };

    const newState = authReducer(state, action);

    //Confirmo que el newState sea igual al state que le pasamos al hacer login
    expect(newState).toEqual({
      logged: true,
      user: action.payload,
    });
    //Los de aqui abajo son lo de arriba pero por separado, confirma el user y el logged individualmente.
    //Confirmamos si el user de newState coincide con el enviado en el payload.
    expect(newState.user).toBe(action.payload);

    //Confirmamos que luego de hacer el login el logged sea verdadero.
    expect(newState.logged).toBeTruthy();
  });

  test("Logout: Debe de borrar el name del user y volver el logged a false", () => {
    const state = {
      logged: true,
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);

    //Confirmamos que newState sea igual a ese {}
    expect(newState).toEqual({
      logged: false,
    });

    //Confirmamos que el newState no contenga payload.
    expect(newState).not.toContain(action.payload);

    //Confirmamos que logged sea false luego de hacer logout.
    expect(newState.logged).toBeFalsy();
  });
});
