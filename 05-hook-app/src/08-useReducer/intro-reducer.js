const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del alma",
    done: false,
  },
];

export const toDoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    //copio el estado y agrego la nueva tarea al arreglo.
    return [...state, action.payload];
  }

  return state;
};

let todos = toDoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

//Llamo al reducer y le paso el state inicial y la accion que quiero que haga para cambiar ese estado agregando la nueva tarea.
todos = toDoReducer(todos, addTodoAction);

console.log(todos);
