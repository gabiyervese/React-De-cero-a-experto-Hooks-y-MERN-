describe("Pruebas en <DemoComponent />", () => {
  test("Esta prueba no debe de fallar", () => {
    //Inicializacion...
    const message1 = "hola mundo";

    //Estimulo...
    const message2 = message1.trim();

    //Observar el comportamiento esperado
    expect(message1).toBe(message2);
  });
});
