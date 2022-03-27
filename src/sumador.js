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
  var caracter
  if(comando.slice(4,5) === "]" ){
    caracter = comando.slice(3,4);
  }
  else{
    var i = 5;
    for (i; "]" !== comando.slice(i-1,i) ; i++) {
      caracter = comando.slice(3,i);
    }
  }
  var reg_ex = new RegExp(caracter,'g');
  return reg_ex;
}

function sumar(comando){
  var total = 0;
  var array_comando = comando.split(" ");
  if(array_comando.length === 2){
    var caracter = command_filter(array_comando[0]);
    var cadena_replaced = array_comando[1].replace(caracter,",");
    total = sumar_solo_cadena(cadena_replaced);
  }
  else if(array_comando.length === 1){
    total = sumar_solo_cadena(comando);
  }
  return total
}
export default sumar;
