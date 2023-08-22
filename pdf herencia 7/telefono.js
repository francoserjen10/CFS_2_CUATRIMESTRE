var Telefono = /** @class */ (function () {
    // constructor
    function Telefono(bateriaActual) {
        this.estaPrendido = false;
        this.bateriaActual = bateriaActual;
    }
    // metodos
    Telefono.prototype.mandarMensajes = function () {
        // quiero mandar un msj?
        // -si; 
        // A quien le queres escribir un msj?
        // - a ...
        // mensaje:
    };
    Telefono.prototype.hacerLlamadas = function () {
    };
    Telefono.prototype.prenderApagar = function (estadoActual) {
        this.estaPrendido = estadoActual;
        if (estadoActual = true) {
            console.log("PRENDIDO");
        }
        else if (estadoActual = false) {
            console.log("APAGADO");
        }
    };
    return Telefono;
}());
var celular1 = new Telefono(10);
celular1.prenderApagar(false);
celular1.prenderApagar(true);
