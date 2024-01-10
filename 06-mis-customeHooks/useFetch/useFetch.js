import { useEffect, useState } from "react";

export const useFetch = (url) => {
  //Establezco los valores iniciales del objeto en el que obtendre la info en data, el estado de carga en isLoading y los erores.
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    //cambio el estado de mi componente y el estado de "isLoading" mientras carga la info.
    setState({
      ...state,
      isLoading: true,
    });

    const res = await fetch(url);
    const data = await res.json();

    //Aqui devuelvo obtenemos la informacion en data y volvemos a cambiar "isLoading" a false ya que ya cargo.
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  //Aqui llamamos a la funcion getFetch cada vez que la url se renderice.
  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
