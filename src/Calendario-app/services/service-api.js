export class ServiceApi {
  
    static getTime() {
        return new Date(Date.now()).getHours() + ":" +
            new Date(Date.now()).getMinutes() + ":" +
            new Date(Date.now()).getSeconds();
    }

    static mesSiguiente() {
        return new Date(Date.now()).getHours() + ":" +
        new Date(Date.now()).getMinutes() + ":" +
        new Date(Date.now()).getSeconds();
    }

    static mesPrevio() {
        return new Date(Date.now()).getHours() + ":" +
        new Date(Date.now()).getMinutes() + ":" +
        new Date(Date.now()).getSeconds();
    }

    static fechaCompleta() {

    }

}