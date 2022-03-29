import Caracter from "./caracter";
class Instruccion{
    lista_caracteres = new Array();
    constructor(comando) {
        var guion = new Caracter("-");
        this.lista_caracteres.push(guion.simbolo);
        this.command_filter(comando);
    }
    command_filter(comando){
        var comand_array = comando.split("[");
        var tamano = comand_array.length;
        var i = 1;
        for (i; i<tamano ; i++) {
            this.only_command_filter(comand_array[i]);
        }
    }
    only_command_filter(comando){
        var caracter
        var i = 0;
        var reg_ex;
        for (i; "]" !== comando.slice(i-1,i) ; i++) {
          caracter = comando.slice(0,i);
        }
        reg_ex = new Caracter(caracter);
        this.lista_caracteres.push(reg_ex.simbolo);
    }
    replacer(cadena){
        for (var i=0; i<this.lista_caracteres.length ; i++) {
            cadena = cadena.replace(this.lista_caracteres[i],",");
        }
        return cadena;
    }
    get(){
        return lista_caracteres;
    }
}
export default Instruccion;