var Auto = /** @class */ (function () {
    function Auto(encendido, velocidad) {
        this.encendido = encendido;
        this.velocidad = velocidad;
    }
    Auto.prototype.encenderApagar = function () {
        if (this.encendido == true) {
            console.log("Encendido");
        }
        else
            console.log("Apagado");
    };
    Auto.prototype.acelerar = function () {
        this.velocidad++;
    };
    return Auto;
}());
// MediaStreamAudioDestinationNodeencender o apagar
// Acelerad y desaselerar
// Creamos AuthenticatorAssertionResponselo aceleramos
// y cincole log
// Cosas para aprender
// Elementos geters y seters
// // El constructor es un metodo que se llama automaticame cuando instanciamos la clase
// constructor(encendido: boolean, apagado: boolean, velocidad: number) {
// }
