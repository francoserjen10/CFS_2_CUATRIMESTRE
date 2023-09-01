// -----------------------------------------------------------> class Sistema <--------------------------------------------------//
var Sistema = /** @class */ (function () {
    function Sistema() {
        this.alumnos = [];
    }
    Sistema.prototype.agregarAlumno = function (alumnos) {
        this.alumnos.push(alumnos);
    };
    // Calculo el promedio general de los alumnos
    Sistema.prototype.promedioTotalDeTodosLosAlumnos = function () {
        if (this.alumnos.length === 0) {
            console.log(this.alumnos);
            return 5;
        }
        var sumaPromedioDeAlumnos = 0;
        for (var _i = 0, _a = this.alumnos; _i < _a.length; _i++) {
            var alumno = _a[_i];
            sumaPromedioDeAlumnos += alumno.promedioTotalDelAlumno();
        }
        var promedioGeneral = sumaPromedioDeAlumnos / this.alumnos.length;
        return promedioGeneral;
    };
    return Sistema;
}());
// -----------------------------------------------------------> class Alumnos <--------------------------------------------------//
var Alumno = /** @class */ (function () {
    function Alumno(nombre, apellido) {
        this.examenes = [];
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Alumno.prototype.agregarExamenesRendidos = function (examen, alumno) {
        this.examenes.push(examen);
    };
    // Calculo el promedio total de un alumno 
    Alumno.prototype.promedioTotalDelAlumno = function () {
        // No hay exámenes, el promedio es 0
        if (this.examenes.length === 0) {
            return 0;
        }
        // Voy sumando todas las notas del alumno dentro de la variable sumaNotasDelAlumno
        var sumaNotasDelAlumno = 0;
        for (var _i = 0, _a = this.examenes; _i < _a.length; _i++) {
            var examen = _a[_i];
            sumaNotasDelAlumno += examen.getNota();
        }
        var promedioPersonal = sumaNotasDelAlumno / this.examenes.length;
        return promedioPersonal;
    };
    return Alumno;
}());
// -----------------------------------------------------------> class ExamenesRendidos <--------------------------------------------------//
var ExamenesRendidos = /** @class */ (function () {
    function ExamenesRendidos(materia, nota) {
        this.materia = materia;
        this.nota = nota;
    }
    ExamenesRendidos.prototype.getMateria = function () {
        return this.materia;
    };
    ExamenesRendidos.prototype.getNota = function () {
        return this.nota;
    };
    return ExamenesRendidos;
}());
var promedioGeneral = new Sistema();
var alumno1 = new Alumno("Franco", "Serjen");
console.log(alumno1);
var examenFran1 = new ExamenesRendidos("Sociales", 10);
console.log(examenFran1);
var examenFran2 = new ExamenesRendidos("Naturales", 8);
console.log(examenFran2);
var examenFran3 = new ExamenesRendidos("Matematicas", 9);
console.log(examenFran3);
// Agrrego los examenes de un alumno 
alumno1.agregarExamenesRendidos(examenFran1, alumno1);
alumno1.agregarExamenesRendidos(examenFran2, alumno1);
alumno1.agregarExamenesRendidos(examenFran3, alumno1);
alumno1.promedioTotalDelAlumno();
console.log(alumno1.promedioTotalDelAlumno());
//-------------------Alumno 2------------------------
var alumno2 = new Alumno("Martin", "Cho");
console.log(alumno2);
var examenTin1 = new ExamenesRendidos("Sociales", 5);
console.log(examenTin1);
var examenTin2 = new ExamenesRendidos("Naturales", 9);
console.log(examenTin2);
var examenTin3 = new ExamenesRendidos("Matematicas", 6);
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
