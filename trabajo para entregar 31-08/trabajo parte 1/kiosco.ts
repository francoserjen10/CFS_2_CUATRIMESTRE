// Clase ControlDeStock
class ControlDeStock {

    // Atributos
    private productosDisponibles: Producto[] = [];
    private productosVendidos: Producto[] = [];

    // Constructor
    constructor() {

    }

    // Metodos

    public agregarProductosDisponibles(producto: Producto): void {
        this.productosDisponibles.push(producto);

    }

    public productoComprado(producto: Producto): void {
        let i = this.productosDisponibles.indexOf(producto);
        if (i !== 0) {
            console.log("No existe ese producto");
        }

        this.productosDisponibles.slice(i, 1);
        this.productosVendidos.push(producto);
    }

    public mostrarProductosDisponibles(): void {
        console.log("Productos disponibles: ");
        this.productosDisponibles.forEach(producto => {
            console.log(producto.getNombre(), "A: $", producto.getPrecio());
        })
    }

    public mostrarProductosCompradis(): void {
        console.log("Productos comprados: ");
        this.productosVendidos.forEach(producto => {
            console.log(producto.getNombre(), "A: $", producto.getPrecio());
        })
    }

}

// Clase Producto
class Producto {

    // Atributos
    private nombre: string;
    private precio: number;

    // Constructor
    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;

    }

    // Metodos
    public getNombre(): string {
        return this.nombre;
    }

    public getPrecio(): number {
        return this.precio;
    }
}

let controlDelStockDelKiosco = new ControlDeStock();

let producto1 = new Producto("Yerba", 600);
let producto2 = new Producto("Azucar", 700);
let producto3 = new Producto("Coca-Cola", 900);
let producto4 = new Producto("Alfajor", 500);

controlDelStockDelKiosco.agregarProductosDisponibles(producto1,);
controlDelStockDelKiosco.agregarProductosDisponibles(producto2,);
controlDelStockDelKiosco.agregarProductosDisponibles(producto3,);
controlDelStockDelKiosco.agregarProductosDisponibles(producto4,);

controlDelStockDelKiosco.productoComprado(producto1);

controlDelStockDelKiosco.mostrarProductosDisponibles();
controlDelStockDelKiosco.mostrarProductosCompradis();

