class Auto {
    private patente: string;
    private marca: string;
    private modelo: string;
    private anio: number;
  ​
    constructor(patente: string, marca: string, modelo: string, anio: number) {
      this.patente = patente;
      this.marca = marca;
      this.modelo = modelo;
      this.anio = anio;
    }
  ​
    getPatente(): string {
      return this.patente;
    }
  ​
    getMarca(): string {
      return this.marca;
    }
  ​
    getModelo(): string {
      return this.modelo;
    }
  ​
    getAnio(): number {
      return this.anio;
    }
  ​
  }
  ​
  class RegistroAutomotor {
    private autos: Auto[];
  ​
    constructor() {
      this.autos = [];
    }
  ​
    darDeAlta(auto: Auto) {
      this.autos.push(auto);
    }
  ​
    listar(): void {
      console.log("Lista de Automotores")
      console.log("----------------------------------------------------------")
      this.autos.forEach((auto: Auto, indice: number) => {
        console.log(`${indice + 1} - ${auto.getMarca()} ${auto.getModelo()} (${auto.getAnio()}) Patente: ${auto.getPatente()}`);
      });
      console.log();
      console.log();
    }
  ​
    actualizar(auto: Auto): void {
      let indiceAuto = -1;
      for (let index = 0; index < this.autos.length; index++) {
        const autoActual = this.autos[index];
        if (autoActual.getPatente() == auto.getPatente()) {
          indiceAuto = index;
        }
      }
      // let indiceAuto = this.autos.findIndex((autoActual) => {
      //   return autoActual.getPatente() == auto.getPatente();
      // });
      if (indiceAuto >= 0) {
        this.autos[indiceAuto] = auto;
      }
    }
  ​
    // implementar el eliminar!!
  ​
  }
  ​
  let ra = new RegistroAutomotor();
  let auto1 = new Auto('AB654RO', 'Ford', 'Focus', 2018);
  ra.darDeAlta(auto1);
  ra.darDeAlta(new Auto('AB654RQ', 'Ford', 'Fairline', 2019));
  ra.darDeAlta(new Auto('AB444RQ', 'Nissan', 'Sentra', 2016));
  ra.darDeAlta(new Auto('AB699RQ', 'Mazda', 'Zrx', 2014));
  ra.darDeAlta(new Auto('BB654RQ', 'Audi', 'A3', 2019));
  ra.darDeAlta(new Auto('AF636RQ', 'Fiat', 'Chronos', 2023));
  ra.listar();
  ra.actualizar(new Auto('AB699RQ', 'Mazda', 'Sirocco', 2015))
  ra.listar();