import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

//NOTA: la funcion de este hook es limpiar y mantener el componente principal llamado TodoApp. No es para ser usado en los demas componentes.

export const useTodos = () => {
  const initialState = [];
  //Ahora utilizo la funcion de init para recuperar la informacion del local storage y mostrarla al actualizar la pagina.

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  //TodoReducer lo coloco referenciandolo sin colocarle los () ya que el use REducer es el que se encargara de ejecutarlo cuando sea necesario.
  const [todos, dispatchTodos] = useReducer(todoReducer, initialState, init);

  //Utilizo el use effect para que cada vez que agregue uina nueva tarea a los todos se renderice la lista con los nuevos valores y se guarde en el localStorage.
  useEffect(() => {
    (todos) => {
      localStorage.setItem("todos", JSON.stringify(todos) || []);
    };
  }, [todos]);

  //funcion para agregar tarea.
  const handleNewTodo = (todo) => {
    //Aqui creo la accion que le pasare el reducer para agregar una todo.
    const action = {
      type: "[TODO] Add todo",
      payload: todo,
    };
    //Le paso la accion para que sea despachada y cambie a un nuevo estado inicial
    dispatchTodos(action);
  };

  //funcion para eliminar tarea.
  const handleDeleteTodo = (id) => {
    //Aqui hago un dispatch para eliminar una tarea segun sea su id.
    dispatchTodos({
      type: "[TODO] Remove todo",
      payload: id,
    });
  };

  //funcion para editar estado done de la tarea.
  const handleToggleTodo = (id) => {
    dispatchTodos({
      type: "[TODO] Toggle todo",
      payload: id,
    });
  };

  //La funcion devuelve las funciones y datos encesarios para hacer funcionar el componente principal.
  return {
    todos,
    //Puedo establecer tambien logica que no sea funcion, en este caso agregue la propo con su valor.
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
