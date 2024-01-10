import useForm from "../Hooks/useForm";

const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    //Si el input no tiene al menos una letra no se envia.
    if (description.length <= 1) return;

    //Hago la nueva tarea
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    //La cual pasare como argumento a la funcion que maneja el agregar/add una tarea a la todo.
    onNewTodo(newTodo);
    //Y finalmente reseteamos la informacion del input para que al enviarlo quede vacio.
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-3">
        Agregar
      </button>
    </form>
  );
};

export default TodoAdd;
