import { act, renderHook } from "@testing-library/react";
import useForm from "../../src/Hooks/useForm";

describe("Pruebas en el useForm", () => {
  const initialForm = {
    name: "Fernando",
    email: "fernando@google.com",
  };

  test("Debe regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("Debe de cambiar el name del formulario", () => {
    const newValue = "Juan";

    const { result } = renderHook(() => useForm(initialForm));

    const { onInputChange, onResetForm } = result.current;
    console.log(onInputChange);

    act(() => {
      //Aqui debemos pasarle a la funcion exactamente lo que se espera de ella.
      onInputChange({ target: { name: "name", value: newValue } });
      //para probar que funciona debo descomentarlo junto al codigo de abajo
      //onResetForm();
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);

    //Estos son para probar el funcionamiento del onResetForm
    // expect(result.current.name).toBe(initialForm.name);
    // expect(result.current.formState.name).toBe(initialForm.name);
  });
});
