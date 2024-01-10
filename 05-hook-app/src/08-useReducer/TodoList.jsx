import TodoItem from "./TodoItem";

const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        // TodoItem component
        <TodoItem
          key={todo.id}
          id={todo.id}
          done={todo.done}
          description={todo.description}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
