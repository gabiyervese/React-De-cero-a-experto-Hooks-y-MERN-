import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "../../src/08-useReducer/TodoItem";

describe("Pruebas en <TodoItem/>", () => {
  const todo = {
    id: 1,
    description: "Piedra del alma",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("Debe de mostrar el Todo pendiente de completar", () => {
    render(
      <TodoItem
        id={todo.id}
        description={todo.description}
        done={todo.done}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    //screen.debug();

    //Aqui tomamos el elemento li del componente.
    const liElement = screen.getByRole("listitem");

    //Comprobamos que el elemento li tenga las clases correspondientes y que coincidan.
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    //Aqui tomamos el elemento span a traves de un aria label que le colocamos al tag, ya que por alguna misteriosa razon el elemento 'span' no es encontrado por getByRole.
    const spanElement = screen.getByLabelText("span");

    //Utilizo el toContain porque quiero ver que contenga un texto especifico en este caso, y aunque hayan otros textos, puedo confirmas especificamente uno.
    expect(spanElement.className).toContain("align-self-center");
    //Aqui confirmamos que no contenga esta clase que por default no debe estar activa, a menos que la todo tenga el done: true.
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  //Pruebas en los eventos del <TodoItem/>

  test("Debe de mostrar el Todo completado", () => {
    //Mutamos el objeto para que el done sea true, es decir que la todo este completada.
    todo.done = true;

    render(
      <TodoItem
        id={todo.id}
        description={todo.description}
        done={todo.done}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    //Aqui tomamos el elemento span a traves de un aria label que le colocamos al tag, ya que por alguna misteriosa razon el elemento 'span' no es encontrado por getByRole.
    const spanElement = screen.getByLabelText("span");

    //Aqui confirmamos que SI contenga esta clase, ya que la todo esta completada, y al done = true debe aparecer esta clase que tacha el texto de la todo.

    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("<span> debe de llamar al ToggleTodo cuando se hace click en el", () => {
    render(
      <TodoItem
        id={todo.id}
        description={todo.description}
        done={todo.done}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    //tomamos el elemento span
    const spanElement = screen.getByLabelText("span");

    //Simulamos el evento "click" del <span></span>
    fireEvent.click(spanElement);

    //Comprobamos si se ha llamado a la función onToggleTodo con el id de la todo como argumento.
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("<span> debe de llamar al DeleteTodo cuando se hace click en el", () => {
    //Renderizamos el componente que queremos testear.
    render(
      <TodoItem
        id={todo.id}
        description={todo.description}
        done={todo.done}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    //tomamos el elemento button
    const deleteButton = screen.getByRole("button");

    //Simulamos el evento "click" del <button></button>
    fireEvent.click(deleteButton);

    //Comprobamos si se ha llamado a la función onDeleteTodoMock con el id de la todo como argumento.
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
