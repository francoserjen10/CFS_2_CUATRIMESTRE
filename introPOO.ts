class Celular {
    // Atributos
    encender: boolean;
    apagar: boolean;
    bajarVolumen: number;
    subirVolumen: number;
    llamar: string;

    // constructor
    constructor(bajarVolumen: number, subirVolumen: number, llamar: string) {
        this.encender = true;
        this.bajarVolumen = bajarVolumen;
        this.subirVolumen = subirVolumen;
        this.llamar = llamar;
    }

    // metodos
    estadoDelCelula() {
        if (this.encender) {
            return this.encender;
        } else {
            return false;
        }
    }
}