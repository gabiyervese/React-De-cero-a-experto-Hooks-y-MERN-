export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    //caso para agregar
    case "[TODO] Add todo":
      return [...initialState, action.payload];

    //caso para eliminar
    case "[TODO] Remove todo":
      return initialState.filter((todo) => todo.id !== action.payload);

    //caso para editar key "done"
    case "[TODO] Toggle todo":
      return initialState.map((todo) => {
        //si el todo.id es igual al que tenemos en la accion entonces devuelve el nuevo todo con el key "done" modificado a su opuesto ya sea true o false.
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });

    default:
      return initialState;
  }
};
