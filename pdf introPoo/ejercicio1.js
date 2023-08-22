var Celular = /** @class */ (function () {
    // constructor
    function Celular(marca) {
        this.marca = marca;
        this.encender = false;
        this.volumenDelCelular = 0;
    }
    // metodos
    Celular.prototype.encenderCelular = function () {
        this.encender = true;
        console.log("El celular esta encendido");
    };
    Celular.prototype.apagarCelular = function () {
        this.apagar = false;
        console.log("El celular esta apagado");
    };
    Celular.prototype.volumenActual = function (volumenNuevo) {
        if (volumenNuevo === volumenNuevo) {
            this.volumenDelCelular = volumenNuevo;
            return console.log("El volumen actual es", +this.volumenDelCelular);
        }
        if (volumenNuevo === 0) {
            this.volumenDelCelular = 0;
            return console.log("El volumen esta en minimo");
        }
        else if (volumenNuevo === 100) {
            this.volumenDelCelular = 100;
            return console.log("El volumen esta aumentado con exito");
        }
    };
    return Celular;
}());
var celu1 = new Celular("Motorola");
celu1.apagarCelular();
celu1.encenderCelular();
celu1.volumenActual(100);
