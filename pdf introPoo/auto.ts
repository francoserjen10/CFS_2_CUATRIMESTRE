interface IAuto {
    encendido: boolean;
    apagado: boolean;
    velocidad: number;
}

class Auto implements IAuto {
    encendido: boolean;
    apagado: boolean;
    velocidad: number;

    constructor(encendido: boolean, velocidad: number) {
        this.encendido = encendido;
        this.velocidad = velocidad;
    }

    encenderApagar() {
        if (this.encendido == true) {
            console.log("Encendido")

        } else
            console.log("Apagado")
    }

    acelerar() {
        this.velocidad++;
    }


}



// MediaStreamAudioDestinationNodeencender o apagar
// Acelerad y desaselerar

// Creamos AuthenticatorAssertionResponselo aceleramos
// y cincole log

// Cosas para aprender
// Elementos geters y seters
















// // El constructor es un metodo que se llama automaticame cuando instanciamos la clase
// constructor(encendido: boolean, apagado: boolean, velocidad: number) {

// }