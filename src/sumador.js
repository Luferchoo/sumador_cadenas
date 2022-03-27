function sumar(cadena){
  var total = 0;
  var array_num = cadena.split(",");
  //console.log(array_num.length);
  for (var i = 0; i < array_num.length; i++) {
    total +=  Number(array_num[i]);
  }
  return total
}
export default sumar;
