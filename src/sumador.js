function sumar(cadena){
  var total = 0;
  var array_num = cadena.split(",");
  console.log(array_num.length);
  if(array_num.length > 1){
    total = total + Number(array_num[0]) + Number(array_num[1]);
  }
  else{
    total = total + Number(cadena);
  }
  return total
}
export default sumar;
