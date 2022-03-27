import sumar from "./sumador.js";

describe("Sumar Cadenas de Numeros", () => {
  it("TOMA EN CUENTA UNA CADENA VACÍA", () => {
    expect(sumar("")).toEqual(0);
  });
  it("TOMA EN CUENTA UNA CADENA CON UN SOLO NÚMERO", () => {
    expect(sumar("2")).toEqual(2);
  });
  it("TOMA EN CUENTA UNA CADENA CON DOS NÚMEROS SUMADOS POR UNA COMA", () => {
    expect(sumar("1,2")).toEqual(3);
  });
  it("TOMA EN CUENTA UNA CADENA CON VARIOS NÚMEROS", () => {
    expect(sumar("1,2,3,20,30")).toEqual(56);
  });
  it("TOMA EN CUENTA UNA CADENA SEPARADA POR GUIONES", () => {
    expect(sumar("1,2-3,4")).toEqual(10);
  });
  it("RECONOCE UN SEPARADOR DETERMINADO POR EL USUARIO", () => {
    expect(sumar("//[;] 1,2;3-4")).toEqual(10);
  });
  it("RECONOCE SEPARADORES MAYORES A UN CARACTER", () => {
    expect(sumar("//[.-] 1.-2.-3.-4")).toEqual(10);
  });
});
