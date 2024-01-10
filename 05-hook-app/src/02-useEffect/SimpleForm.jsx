import { useState } from "react";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "gabriela",
    email: "gabriela@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      //uso el spread para incluir todo lo que ya tenia el objeto
      ...formState,
      //aqui uso lsa propiedades computadas de JS para seleccionar solo la que quiero modificar
      [name]: value,
    });
    console.log(formState);
  };

  return (
    <>
      <h1>Simple form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@email.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};

export default SimpleForm;
