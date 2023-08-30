class Alumno {
    private nombre: string;
    private dni: number;
    private notasDelAlumno: number[];

    constructor(nombre: string, dni: number, notasDelAlumno: number[]) {
        this.nombre = nombre;
        this.dni = dni;
        this.notasDelAlumno = notasDelAlumno;
    }

    public getNombre(): string {
        return this.nombre;
        // verificar que por lo menos haya un caracter en el input para que sea verdad que existe un nombre
    }

    public getDni(): number {
        return this.dni;
    }

    public NotasDelAlumno(): number[] {
        return this.NotasDelAlumno();
    }


}






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