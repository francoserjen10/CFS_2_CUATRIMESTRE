class Celular {
    // Atributos
    marca: string;
    encender: boolean;
    apagar: boolean;
    volumenDelCelular: number;
    llamar: string;

    // constructor
    constructor(marca: string) {
        this.marca = marca;
        this.encender = false;
        this.volumenDelCelular = 0;
    }

    // metodos
    encenderCelular(): void {
        this.encender = true;
        console.log("El celular esta encendido");
    }

    apagarCelular(): void {
        this.apagar = false;
        console.log("El celular esta apagado");

    }

    volumenActual(volumenNuevo: number): void {
        if (volumenNuevo === 0) {
            this.volumenDelCelular = 0;
            return console.log("El volumen esta en minimo");
        } else if (volumenNuevo === 100) {
            this.volumenDelCelular = 100;
            return console.log("El volumen esta aumentado con exito");
        } else {
            this.volumenDelCelular = volumenNuevo;
            return console.log("El volumen actual es", + this.volumenDelCelular);
        }
    }

    hacerLlamada(numero: number): void {
        let numeroEnCadena = numero.toString()
        if (numeroEnCadena.length === 10) {
            return console.log("Llamar a : ", numeroEnCadena);
        } else {
            return console.log("El numero: ", numeroEnCadena, "Es invalido");
        }



    }



}

let celu1 = new Celular("Motorola");
celu1.apagarCelular();
celu1.encenderCelular();
celu1.volumenActual(100);
celu1.volumenActual(0);
celu1.volumenActual(45);
celu1.hacerLlamada(22332);
celu1.hacerLlamada(2284696022);