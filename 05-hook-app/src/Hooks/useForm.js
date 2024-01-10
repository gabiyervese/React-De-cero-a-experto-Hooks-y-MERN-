import { useState } from "react";

const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      //uso el spread para incluir todo lo que ya tenia el objeto
      ...formState,
      //aqui uso lsa propiedades computadas de JS para seleccionar solo la que quiero modificar
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
export default useForm;
