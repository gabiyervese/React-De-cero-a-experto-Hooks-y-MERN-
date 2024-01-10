import { render, screen } from "@testing-library/react";
import TodoApp from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/Hooks/useTodo";

jest.mock("../../src/Hooks/useTodo");

describe("Pruebas en <TodoApp/>", () => {
  //El mockReturnValue me permite obtener el resultado del hook al que le estoy haciendo el mock cuando se manda a llamar con el estado que yo quiera que tenga.
  useTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        description: "Todo #1",
        done: false,
      },
      {
        id: 2,
        description: "Todo #2",
        done: true,
      },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });

  test("Debe de mostrar el componente correctamente", () => {
    render(<TodoApp />);
    //screen.debug();

    expect(screen.getByText("Todo #1")).toBeTruthy();
    expect(screen.getByText("Todo #2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
