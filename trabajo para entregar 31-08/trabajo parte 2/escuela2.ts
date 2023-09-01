// -----------------------------------------------------------> class Sistema <--------------------------------------------------//
class Sistema {
    private alumnos: Alumno[] = [];


    public constructor() {

    }

    public agregarAlumno(alumnos: Alumno): void {
        this.alumnos.push(alumnos);
    }

    // Calculo el promedio general de los alumnos
    public promedioTotalDeTodosLosAlumnos(): number {

        if (this.alumnos.length === 0) {
            console.log(this.alumnos);
            return 5;
        }


        let sumaPromedioDeAlumnos = 0;
        for (let alumno of this.alumnos) {
            sumaPromedioDeAlumnos += alumno.promedioTotalDelAlumno();
        }

        let promedioGeneral = sumaPromedioDeAlumnos / this.alumnos.length;
        return promedioGeneral;
    }



}


// -----------------------------------------------------------> class Alumnos <--------------------------------------------------//
class Alumno {

    private nombre: string;
    private apellido: string;
    private examenes: ExamenesRendidos[] = [];

    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;

    }

    public agregarExamenesRendidos(examen: ExamenesRendidos, alumno: Alumno): void {
        this.examenes.push(examen);

    }

    // Calculo el promedio total de un alumno 
    public promedioTotalDelAlumno(): number {

        // No hay exámenes, el promedio es 0
        if (this.examenes.length === 0) {
            return 0;
        }

        // Voy sumando todas las notas del alumno dentro de la variable sumaNotasDelAlumno
        let sumaNotasDelAlumno = 0;
        for (let examen of this.examenes) {
            sumaNotasDelAlumno += examen.getNota();
        }

        let promedioPersonal = sumaNotasDelAlumno / this.examenes.length;
        return promedioPersonal;
    }



}




// -----------------------------------------------------------> class ExamenesRendidos <--------------------------------------------------//
class ExamenesRendidos {

    private materia: string;
    private nota: number;

    constructor(materia: string, nota: number) {
        this.materia = materia;
        this.nota = nota;
    }



    public getMateria() {
        return this.materia;
    }

    public getNota() {
        return this.nota;
    }

}


let promedioGeneral = new Sistema();

let alumno1 = new Alumno("Franco", "Serjen");
console.log(alumno1);

let examenFran1 = new ExamenesRendidos("Sociales", 10);
console.log(examenFran1);

let examenFran2 = new ExamenesRendidos("Naturales", 8);
console.log(examenFran2);

let examenFran3 = new ExamenesRendidos("Matematicas", 9);
console.log(examenFran3);

// Agrrego los examenes de un alumno 
alumno1.agregarExamenesRendidos(examenFran1, alumno1);
alumno1.agregarExamenesRendidos(examenFran2, alumno1);
alumno1.agregarExamenesRendidos(examenFran3, alumno1);

alumno1.promedioTotalDelAlumno();
console.log(alumno1.promedioTotalDelAlumno());

//-------------------Alumno 2------------------------
let alumno2 = new Alumno("Martin", "Cho");
console.log(alumno2);

let examenTin1 = new ExamenesRendidos("Sociales", 5);
console.log(examenTin1);

let examenTin2 = new ExamenesRendidos("Naturales", 9);
console.log(examenTin2);

let examenTin3 = new ExamenesRendidos("Matematicas", 6);
console.log(examenTin3);

alumno2.agregarExamenesRendidos(examenTin1, alumno2);
alumno2.agregarExamenesRendidos(examenTin2, alumno2);
alumno2.agregarExamenesRendidos(examenTin3, alumno2);

alumno2.promedioTotalDelAlumno();
console.log(alumno2.promedioTotalDelAlumno());

promedioGeneral.agregarAlumno(alumno1);
promedioGeneral.agregarAlumno(alumno2);

promedioGeneral.promedioTotalDeTodosLosAlumnos();
console.log(promedioGeneral.promedioTotalDeTodosLosAlumnos());


// alumnos: Alumno[] = [
//     {
//         nombre: 'fran',
//         apellido: 'serj',
//         examenes: [
//             {
//                 materia: 'sdg',
//                 nota: ''
//             },
//             {
//                 materia: 'sdg',
//                 nota: ''
//             }

//         ]
//     },
//     {
//         nombre: 'tin',
//         apellido: 'cho',
//         examenes: [
//             {
//                 materia: 'sadsfd',
//                 nota: '10'
//             },
//             {
//                 materia: 'sadfgsthr',
//                 nota: '2'
//             }

//         ]
//     }
// ]
