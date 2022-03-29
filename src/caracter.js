class Caracter {
    simbolo;
    constructor(n) {
        this.simbolo = new RegExp("["+ n +"]",'g'); 
    }
    get(){
        return this.simbolo;
    }
}
export default Caracter;