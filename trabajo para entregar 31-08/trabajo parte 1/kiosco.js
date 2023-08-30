// Clase ControlDeStock
var ControlDeStock = /** @class */ (function () {
    // Constructor
    function ControlDeStock() {
        // Atributos
        this.productosDisponibles = [];
        this.productosVendidos = [];
    }
    // Metodos
    ControlDeStock.prototype.agregarProductosDisponibles = function (producto) {
        this.productosDisponibles.push(producto);
    };
    ControlDeStock.prototype.productoComprado = function (producto) {
        var i = this.productosDisponibles.indexOf(producto);
        if (i !== 0) {
            console.log("No existe ese producto");
        }
        this.productosDisponibles.slice(i, 1);
        this.productosVendidos.push(producto);
    };
    ControlDeStock.prototype.mostrarProductosDisponibles = function () {
        console.log("Productos disponibles: ");
        this.productosDisponibles.forEach(function (producto) {
            console.log(producto.getNombre(), "A: $", producto.getPrecio());
        });
    };
    ControlDeStock.prototype.mostrarProductosCompradis = function () {
        console.log("Productos comprados: ");
        this.productosVendidos.forEach(function (producto) {
            console.log(producto.getNombre(), "A: $", producto.getPrecio());
        });
    };
    return ControlDeStock;
}());
// Clase Producto
var Producto = /** @class */ (function () {
    // Constructor
    function Producto(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    // Metodos
    Producto.prototype.getNombre = function () {
        return this.nombre;
    };
    Producto.prototype.getPrecio = function () {
        return this.precio;
    };
    return Producto;
}());
var controlDelStockDelKiosco = new ControlDeStock();
var producto1 = new Producto("Yerba", 600);
var producto2 = new Producto("Azucar", 700);
var producto3 = new Producto("Coca-Cola", 900);
var producto4 = new Producto("Alfajor", 500);
controlDelStockDelKiosco.agregarProductosDisponibles(producto1);
controlDelStockDelKiosco.agregarProductosDisponibles(producto2);
controlDelStockDelKiosco.agregarProductosDisponibles(producto3);
controlDelStockDelKiosco.agregarProductosDisponibles(producto4);
controlDelStockDelKiosco.productoComprado(producto1);
controlDelStockDelKiosco.mostrarProductosDisponibles();
controlDelStockDelKiosco.mostrarProductosCompradis();
