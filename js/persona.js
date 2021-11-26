// Clase Persona

class Persona {
    constructor(nombre,apellido,correo){
        this._nombre = nombre;
        this._apellido = apellido;
        this._correo = correo;
    }

    // Metodo get
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get correo(){
        return this._correo;
    }

    // Metodo set

    set nombre(nombre){
        this._nombre = nombre;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    set correo(correo){
        this._correo = correo;
    }

}