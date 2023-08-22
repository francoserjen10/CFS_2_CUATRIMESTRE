import { Libro } from "./libros";

import * as rls from 'readline-sync';
class GestorLibros {
    //Atributos
    private nombreBiblioteca: string;
    private libros: Libro[];

    public constructor(nombreBiblioteca: string) {
        this.nombreBiblioteca = nombreBiblioteca;
        this.libros = new Array();
        //this.libros = [];
    }
    //Metodos

    public insertarLibro(libro: Libro) {
        this.libros.push(libro);
    };


    public buscarLibroPorNombre(titulo?: string, autor?: string, genero?: string, anio?: number, editorial?: string, id?: number): void {
        for (let indice = 0; indice < this.libros.length; indice++) {
            if (this.libros[indice].getTitulo() == titulo) {
                console.log('titulo');
            }
            else if (this.libros[indice].getAutor() == autor) {
                console.log('autor');
            }
            else if (this.libros[indice].getGenero() == genero) {
                console.log('genro');
            }
            else if (this.libros[indice].getAnio() == anio) {
                console.log('anio');
            }
            else if (this.libros[indice].getEditorial() == editorial) {
                console.log('edit');
            }
            else if (this.libros[indice].getId() == id) {
                console.log('id');
            }
        }
    }

    public buscarLibro(libro: Libro): void {
        for (let indice = 0; indice < this.libros.length; indice++) {
            if (this.libros[indice] == libro) {
                return console.log("El libro se encuentra en su biblioteca, su id es: ", this.libros[indice].getId());
            }
        }
    }





}

function menu(dato) {
    switch (dato) {
        case 1: {
            let variable: string = rls.question('ingrece titulo:');

            for (let indice = 0; indice < this.libros.length; indice++) {
                if (this.libros[indice].getTitulo() == variable) {
                    return console.log(this.libros[indice]);
                }
            }
        }


        case 2: {
            let variable: string = rls.question('ingrece autor:');
            for (let indice = 0; indice < this.libros.length; indice++) {
                if (this.libros[indice].getAutor() == variable) {
                    return console.log(this.libros[indice]);
                }
            }

        }
        case 3: {
            let variable: string = rls.question('ingrece genero:');
            for (let indice = 0; indice < this.libros.length; indice++) {
                if (this.libros[indice].getGenero() == variable) {
                    return console.log(this.libros[indice]);
                }
            }

        }
        case 4: {
            let variable: number = rls.questionInt('ingrece anio:');

            for (let indice = 0; indice < this.libros.length; indice++) {
                if (this.libros[indice].getAnio() == variable) {
                    return console.log(this.libros[indice]);
                }
            }
        }
        case 5: {
            let variable: string = rls.question('ingrece editorial:');

            for (let indice = 0; indice < this.libros.length; indice++) {
                if (this.libros[indice].getEditorial() == variable) {
                    return console.log(this.libros[indice]);
                }
            }

        }
        case 6: {
            let variable: number = rls.questionInt('ingrece id:');
            for (let indice = 0; indice < this.libros.length; indice++) {
                if (this.libros[indice].getId() == variable) {
                    return console.log(this.libros[indice]);
                }
            }

        }

    }
}
let biblioteca1 = new GestorLibros("Primero de Mayo");
let libro1 = new Libro('juan', 'juan autor', 'juanitos', 2000, 'juan fc', 12)
let libro2 = new Libro('juan', 'juan autor', 'juanitos', 2000, 'juan fc', 5)
let libro3 = new Libro('juan', 'juan autor', 'juanitos', 2000, 'juan fc', 62)
let libro4 = new Libro('juan', 'juan autor', 'juanitos', 2000, 'juan fc', 72)
let libro5 = new Libro('juan', 'juan autor', 'juanitos', 2000, 'juan fc', 82)
let libro6 = new Libro('juan', 'juan autor', 'juanitos', 2000, 'juan fc', 92)
biblioteca1.insertarLibro(new Libro("Hola", "Lorena", "Capeluz", 2018, 'asd', 1));
biblioteca1.insertarLibro(libro1)
biblioteca1.insertarLibro(libro2)
biblioteca1.insertarLibro(libro3)
biblioteca1.insertarLibro(libro4)
biblioteca1.insertarLibro(libro5)
biblioteca1.insertarLibro(libro6)
console.log(biblioteca1);

//biblioteca1.buscarLibroPorNombre('juan')
let busqueda: string = rls.questionInt('Porque quiere buscar? 1: titulo, 2:autor, 3: genero, 4:anio, : ')