abstract class NotificacionesService {
    abstract enviarNotificacion(mensaje: string): void

}

class EmailNotificacionService extends NotificacionesService {
    enviarNotificacion(mensaje: string): void {
        console.log(`Se envia por Email: ${mensaje}`);
    }
}

class SmsNotificacionService extends NotificacionesService {
    enviarNotificacion(mensaje: string): void {
        console.log(`Se envia por sms: ${mensaje}`);
    }
}

class Contacto {
    protected email: string;
    protected
}

class Usuario {
    protected nombreUsuario: string;
    protected contacto: Contacto;

    constructor(nombreUsuario: string) {
        this.nombreUsuario = nombreUsuario;

    }
    getContacto() {
        return this.contacto;
    }

    setContacto(contacto: Contacto) {
        this.contacto = contacto;
    }



}

class Aplicacion {
    private servicioNotificacion

    constructor(servicioNotificacion: NotificacionesService) {
        this.servicioNotificacion = servicioNotificacion;
    }

    ejecutar(usuario: Usuario) {
        this.servicioNotificacion.enviarNotificacion(`Hola usuario, se ejecuta tu APP`);
    }

}

///-----------------------------------------------------------


const not1 = new EmailNotificacionService();
const not2 = new SmsNotificacionService();

const usuario = new usuario();
const aplicacion = new Aplicacion()