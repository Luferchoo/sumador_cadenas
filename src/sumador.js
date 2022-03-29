import Instruccion from "./instruccion";
function menor_1000(numero){
  return numero<=1000
}
function sumar_solo_cadena(cadena){
  var total = 0;
  var array_num = cadena.split(",");
  console.log(array_num);
  array_num = array_num.filter(menor_1000);
  console.log(array_num);
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
