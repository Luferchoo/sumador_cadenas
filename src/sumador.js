function sumar_solo_cadena(cadena){
  var total = 0;
  cadena = cadena.replace("-",",")
  var array_num = cadena.split(",");
  for (var i = 0; i < array_num.length; i++) {
    total +=  Number(array_num[i]);
  }
  return total
}

function command_filter(comando){
  return comando.slice(3,4);
}

function sumar(comando){
  var total = 0;
  var array_comando = comando.split(" ");
  //console.log(command_filter(array_comando[0]));
  if(array_comando.length === 2){
    total = sumar_solo_cadena(array_comando[1].replace(command_filter(array_comando[0]),","));
  }
  else if(array_comando.length === 1){
    total = sumar_solo_cadena(comando);
  }
  return total
}
export default sumar;
