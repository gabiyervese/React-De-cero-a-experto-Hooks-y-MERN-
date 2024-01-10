import { useFetch, useCounter } from "../Hooks";
import { Loading, Quotes } from "./index";

const MultipleCustomeHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  //NO es posible hacer destructuring de algo que es NULL, da error de JS, PERO si podemos hacer destructuring de algo que tiene valor ya sea true,false,etc,  un VALOR definido.

  //Por eso ya que definimos data en el hook como NULL, debemos hacer esta condicion para lograr el destructuring.

  //Esta sintaxis la hacemos porque esta API nos devuelve un array, de haber devuelto un objeto no hubiese sido necesario.
  //Lo traducimos asi: "Si data tiene un valor entonce toma la data en la posicion 0"
  const { author, quote } = !!data && data[data.length - 1];

  //!!data significa lo siguiente: si en la consola escribimos console.log(null) sera igual a null, !null sera igual a true y !!null sera igual a false. Por lo que en esa condicion queremos decir que si esa data no esta vasia entonces que devuelva el valor de la primera posicion (se le llama "doble negacion").
  //Mayormente se usa la doble negación !! para forzar la conversión del tipo. Asi convertimos algunos valores como “null”, “undefined”, u objetos a un valor booleano.

  return (
    <>
      <h1>Breaking Bad quotes</h1>
      <hr />
      {isLoading ? <Loading /> : <Quotes quote={quote} author={author} />}
      <button
        //Aqui puedo colocar que si "isLoading" es true durante ese periodo de tiempo el boton estara inhabilitado. 
        disabled={isLoading}
        onClick={() => increment(1)}
      >
        Next quote
      </button>
    </>
  );
};

export default MultipleCustomeHooks;
