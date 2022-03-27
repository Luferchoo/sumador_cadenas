function sumar(cadena){
  var total = 0;
  cadena = cadena.replace("-",",")
  var array_num = cadena.split(",");
  console.log(cadena);
  for (var i = 0; i < array_num.length; i++) {
    total +=  Number(array_num[i]);
  }
  return total
}
export default sumar;
