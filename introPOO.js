var Celular = /** @class */ (function () {
    // constructor
    function Celular(marca) {
        this.marca = marca;
        this.volumenActual = 0;
    }
    // metodos
    Celular.prototype.estadoDelCelular = function () {
        if (this.encender) {
            return this.encender;
        }
        else {
            return false;
        }
        console.log("El celular esta:", this.estadoDelCelular());
    };
    return Celular;
}());
var celular1 = new Celular("Motorola");
celular1.estadoDelCelular;
