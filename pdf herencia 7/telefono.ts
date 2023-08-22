import * as readline from 'readline';

export class Telefono {
    // atributos
    private estaPrendido: boolean;
    private bateriaActual: number;

    // constructor
    constructor(bateriaActual: number) {
        this.estaPrendido = false;
        this.bateriaActual = bateriaActual;
    }

    // metodos
    mandarMensajes() {
        if (this.estaPrendido) {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question("¿Quieres mandar un mensaje? (SI/NO): ", (respuesta1) => {
                if (respuesta1.toLowerCase() === 'si') {
                    rl.question("A quién le quieres escribir un mensaje?: ", (destinatario) => {
                        rl.question("Escribe el mensaje que deseas enviar: ", (mensaje) => {
                            console.log(`Mensaje enviado a ${destinatario}: ${mensaje}`);
                            rl.close();
                        });
                    });
                } else {
                    console.log("No se va a enviar un mensaje.");
                    rl.close();
                }
            });
        } else {
            console.log("No puedes enviar mensajes porque el teléfono está apagado.");
        }
    }
        // quiero mandar un msj?
        // -si; 
        // A quien le queres escribir un msj?
        // - a ...
        // mensaje:

    

    hacerLlamadas() {

    }

    prenderApagar(estadoActual: boolean): void {
        this.estaPrendido = estadoActual;
        if (estadoActual = true) {
            console.log("PRENDIDO");
        } else if (estadoActual = false) {
            console.log("APAGADO");
        }


    }








}
let celular1 = new Telefono(10);

celular1.prenderApagar(false);
celular1.prenderApagar(true);

