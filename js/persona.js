// Clase Persona

class Persona {
    constructor(nombre,apellido,wallet){
        this._nombre = nombre;
        this._apellido = apellido;
        this._wallet = wallet;
    }

    // Metodo get
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get wallet(){
        return this.wallet;
    }

    // Metodo set

    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    set wallet(wallet){
        this._correo = this.wallet;
    }

}