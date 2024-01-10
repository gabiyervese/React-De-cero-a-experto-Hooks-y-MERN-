import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import { useTodos } from "../Hooks/useTodo";

const TodoApp = () => {
  const {
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todos,
    todosCount,
    pendingTodosCount,
  } = useTodos();

  return (
    <>
      <h1>
        Todo App: {todosCount} <small>, pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* TodoList component */}
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar To Do</h4>
          <hr />
          {/* TodoAdd component with add functionality */}
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
