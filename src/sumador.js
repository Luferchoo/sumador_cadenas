import Instruccion from "./instruccion";

function sumar_solo_cadena(cadena){
  var total = 0;
  var array_num = cadena.split(",");
  for (var i = 0; i < array_num.length; i++) {
    total +=  Number(array_num[i]);
  }
  return total
}

function sumar(comando){
  var total = 0;
  var array_comando = comando.split(" ");
  var lista = new Instruccion(array_comando[0])
  var cadena_replaced
  if(array_comando.length >= 2){
    cadena_replaced=lista.replacer(array_comando[1]);
  }
  else{
    cadena_replaced=lista.replacer(array_comando[0]);
  }
  return sumar_solo_cadena(cadena_replaced);
}
export default sumar;
