import sumar from "./sumador.js";

describe("Sumar Cadenas de Numeros", () => {
  it("TOMA EN CUENTA UNA CADENA VACÍA", () => {
    expect(sumar("")).toEqual(0);
  });
});
