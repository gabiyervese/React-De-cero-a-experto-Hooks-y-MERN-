import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  //Funcion para incrementar
  const increment = (value) => {
    //Aqui cambiamos "counter por la funcion flecha y current para poder usar el valor actual del counter"
    setCounter((current) => current + value);
  };

  //funcion para decrementar
  const decrement = (value) => {
    if (counter === 0) return;
    setCounter((current) => current - value);
  };

  //funcion para hacer reset.
  const reset = () => {
    setCounter(initialValue);
  };

  return { counter, increment, decrement, reset };
};
