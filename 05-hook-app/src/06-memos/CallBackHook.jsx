import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  //El useCallback sirve para memorizar funciones y regresa una funcion que se pueda ejecutar, pero esa funcion memorizada solo se va a volver a renderizar cuando algo cambie.
  //para que no se vuelva a maemorizar el counter escribo es "value" y no directamente el counter. De esta forma el useCallBack lo toma como el valor que tenga el counter, no el counter en si como variable.
  const increment = useCallback(() => {
    setCounter((value) => value + 1);
  }, []);
  //Nota: si quiero mandar un argumento a l funcion coloco "value" dentro de los parentecis de la call back function que llama a "setCounter".

  return (
    <>
      <h1>Counter: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  );
};
