import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo to do",
      done: false,
    },
  ];

  test("Debe de regresar el estado inicial", () => {
    //Aqui le enviamos un {} vacio porque asi no va caer en una condicion del switch en el todoREducer por lo cual llegara al default el cual regresa el initialState.
    const newState = todoReducer(initialState, {});

    //Para evaluar {} ser ecomiendo usar .toEqual, pero en este caso .toBe evalua que sea identico el mismo objeto incluyendo su espacio en memoria.
    expect(newState).toBe(initialState);
  });

  test("Debe de agregar un to do", () => {
    const action = {
      type: "[TODO] Add todo",
      payload: {
        id: 2,
        description: "Nueva to do",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);

    //Aqui corroboro que hayan 2 tareas en la lista de todos.
    expect(newState.length).toBe(2);

    //El toContain nos ayuda a saber que el []  de newState contenga el objeto payload
    expect(newState).toContain(action.payload);
  });

  test("Debe de eliminar un to do", () => {
    const action = {
      type: "[TODO] Remove todo",
      payload: 2,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).not.toBe(2);
  });

  test("Debe de realizar el toggle del to do", () => {
    const action = {
      type: "[TODO] Toggle todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState[0].done).toBe(true);

    //Con esto aseguramos que el toggle si funciona y hace el cambio.
    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });
});
