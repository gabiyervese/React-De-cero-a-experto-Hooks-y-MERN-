const TodoItem = ({ description, id, done, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`${
          done ? "text-decoration-line-through" : ""
        } align-self-center`}
        onClick={() => onToggleTodo(id)}
        aria-label="span"
      >
        {description}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(id)}>
        Borrar
      </button>
    </li>
  );
};

export default TodoItem;
