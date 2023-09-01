var Alumno = /** @class */ (function () {
    function Alumno(nombre, dni, notasDelAlumno) {
        this.nombre = nombre;
        this.dni = dni;
        this.notasDelAlumno = notasDelAlumno;
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
        // verificar que por lo menos haya un caracter en el input para que sea verdad que existe un nombre
    };
    Alumno.prototype.getDni = function () {
        return this.dni;
    };
    Alumno.prototype.NotasDelAlumno = function () {
        return this.notasDelAlumno;
    };
    return Alumno;
}());
// eliminar(patente: string): void {
//     let indiceAuto = -1;
//     for (let index = 0; index < this.vehiculos.length; index++) {
//       const autoActual = this.vehiculos[index];
//       if (autoActual.getPatente() === patente) {
//         this.vehiculos.splice(index, 1);
//       }
//     }
//   }
// promedio Daniel
// function promedioEscolar(ar1:number[], canNotas:number):number{
//     let promedio:number = 0;
//     for(let i:number= 0; i < canNotas; i++){
//         promedio += ar1[i];
// promedio Kevin
// public promedioAlumno(legajo: number): number {
//     let promedio: number = 0;
//     for (let index = 0; index < this.alumnos.length; index++) {
//         let alumnoActual = this.alumnos[index];
//         if (alumnoActual.getLegajo() === legajo) {
//             let notas:number[]=alumnoActual.obtenerNotas()
//             for (let index = 0; index < notas.length; index++){
//                 promedio += notas[index];
//             }
//         }
//     }
//     return promedio;
var pepe1 = new Alumno("Eli", 424545, [7, 4, 5]);
pepe1.getDni();
console.log(pepe1.getDni());
pepe1.getNombre();
console.log(pepe1.getNombre());
pepe1.NotasDelAlumno();
console.log(pepe1.NotasDelAlumno());
