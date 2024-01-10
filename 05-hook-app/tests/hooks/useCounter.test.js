import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/Hooks/useCounter";

describe("Pruebas en el useCounter", () => {
  test("Debe retornar los valores por defecto", () => {
    //renderizamos el hook, con "renmderHook", este nos devuelve la informacion de como se encuentra el hook que estamos evaluando en ese momento, es decir el "result" del hook.
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(0);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("Debe de generarel counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("Debe de incrementar el counter", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment } = result.current;

    //El "act" es una funcion que recibe un callback que es una funcion flecha.
    //Aqui hacemos la simulacion en la que ejecutamos la logica que queremos probar.
    act(() => {
      //PAsando solo una funcion de increment pasa la prueba, PERO si coloco 2 increments da un falso negativo, es decir, falla, las funciones si estan ejecutandose bien
      //pero igual da error. Esto ocurre porque el "counter" en la funcion de increment en el useCounter esta usando el valor anterior, como explicamos abajo. Esto se arregla
      //modificando el codigo del increment colocando en el counter de la funcion "(current) => current + value" de esta forma pasa la prueba y la funcion toma siempre el valor actual que se le esta pasando como argumento.
      //Podiamos dejarlo pasar pero si quiero que ambas funciones increment funcionen en un mismo act debo hacer este cambio en el codigo.
      increment(1);
      increment(2);
    });

    //Aqui el counter no tiene el valor actualizado y por eso la prueba falla, ya que estamos trabajando con un valor primitivo el cual
    //se extrae y crea una nueva variable por lo cual siempre tendra el valor con el que se extrajo, en este caso el counter que seria "0".
    //Lo ideal es que en lugar de usar "counter" solo, usemos "result.current.counter" que corresponde al valor actual del counter
    expect(result.current.counter).toBe(3);
  });

  test("Debe de decrementar el counter", () => {
    const { result } = renderHook(() => useCounter(10));
    const { counter, decrement } = result.current;

    act(() => {
      decrement(1);
      decrement(2);
    });

    expect(result.current.counter).toBe(7);
  });

  test("Debe de decrementar el counter", () => {
    const { result } = renderHook(() => useCounter(10));
    const { counter, reset, increment } = result.current;

    act(() => {
      increment(5);
      reset();
    });

    expect(result.current.counter).toBe(10);
  });
});
