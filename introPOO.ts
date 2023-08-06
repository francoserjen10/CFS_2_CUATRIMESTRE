class Celular {
    // Atributos
    marca: string;
    encender: boolean;
    apagar: boolean;
    volumenActual: number;
    llamar: string;

    // constructor
    constructor(marca: string) {
        this.marca = marca;
        this.encender = false;
        this.volumenActual = 0;
    }

    // metodos
    encenderCelular() {
        this.encender = true;
        console.log("El celular esta encendido");
    }

    apagarCelular() {
        this.apagar = false;
        console.log("El celular esta apagado");

    }

    subirVolumen() {

    }












}


