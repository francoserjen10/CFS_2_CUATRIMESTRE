// -----------------------------------------> class ControlDeStock <--------------------------------------------------//
var ControlDeStock = /** @class */ (function () {
    // Constructor
    function ControlDeStock() {
        // Atributos
        this.productosDisponibles = [];
        this.productosVendidos = [];
    }
    // Metodos
    // Agrego los productos disponibles 
    ControlDeStock.prototype.agregarProductosDisponibles = function (producto) {
        this.productosDisponibles.push(producto);
    };
    // Metodo para comprar un producto disponible
    ControlDeStock.prototype.productoComprado = function (producto) {
        // Busco el indice del producto disponible con indexOf 
        var i = this.productosDisponibles.indexOf(producto);
        // Me fijo si el indice del producto es distinto a -1, si es distinto es que el producto existe en productos disponibles
        if (i !== -1) {
            // Elimino el producto de productosDisponibles con splice(el indice del producto, la cantidad a eliminar)
            this.productosDisponibles.splice(i, 1);
            // Agrego el producto comprado a productosVendidos con push
            this.productosVendidos.push(producto);
        }
    };
    // Muestro los productos disponibles y les asigno el nombre y el precio
    ControlDeStock.prototype.mostrarProductosDisponibles = function () {
        console.log("Productos disponibles: ");
        this.productosDisponibles.forEach(function (producto) {
            console.log(producto.getNombre(), "A: $", producto.getPrecio());
        });
    };
    // Muestro productos comprados
    ControlDeStock.prototype.mostrarProductosComprados = function () {
        console.log("Productos comprados: ");
        this.productosVendidos.forEach(function (producto) {
            console.log(producto.getNombre(), "A: $", producto.getPrecio());
        });
    };
    return ControlDeStock;
}());
// -----------------------------------------> class Producto <--------------------------------------------------//
var Producto = /** @class */ (function () {
    // Constructor
    function Producto(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    // Metodos
    // Obtengo el nombre
    Producto.prototype.getNombre = function () {
        return this.nombre;
    };
    // Obtengo el precio
    Producto.prototype.getPrecio = function () {
        return this.precio;
    };
    return Producto;
}());
// -----------------------------------------> Ejecuto <--------------------------------------------------//
// Creo objeto e instancio clase ControlDeStock
var controlDelStockDelKiosco = new ControlDeStock();
// Creo objeto e instancio clase Producto
var producto1 = new Producto("Yerba", 600);
var producto2 = new Producto("Azucar", 700);
var producto3 = new Producto("Coca-Cola", 900);
var producto4 = new Producto("Alfajor", 500);
// Agrego los productos disponibles
controlDelStockDelKiosco.agregarProductosDisponibles(producto1);
controlDelStockDelKiosco.agregarProductosDisponibles(producto2);
controlDelStockDelKiosco.agregarProductosDisponibles(producto3);
controlDelStockDelKiosco.agregarProductosDisponibles(producto4);
// Compro un producto
controlDelStockDelKiosco.productoComprado(producto1);
// Muestro los productos que estan disponibles despues de las ventas
controlDelStockDelKiosco.mostrarProductosDisponibles();
// Muestro productos comprados
controlDelStockDelKiosco.mostrarProductosComprados();
