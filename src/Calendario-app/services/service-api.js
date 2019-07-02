export class ServiceApi {
  
    static getTime() {
        return new Date(Date.now()).getHours() + ":" +
            new Date(Date.now()).getMinutes() + ":" +
            new Date(Date.now()).getSeconds();
    }

    static getMesSiguiente() {
        return new Date(Date.now()).getHours() + ":" +
        new Date(Date.now()).getMinutes() + ":" +
        new Date(Date.now()).getSeconds();
    }

    static getMesPrevio() {
        return new Date(Date.now()).getHours() + ":" +
        new Date(Date.now()).getMinutes() + ":" +
        new Date(Date.now()).getSeconds();
    }

    static getFechaCompleta() {
        return new Date();
    }

}