const mesesAnio = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

export class ServiceApi {
  
    static getTime() {
        return new Date(Date.now()).getHours() + ":" +
            new Date(Date.now()).getMinutes() + ":" +
            new Date(Date.now()).getSeconds();
    }

    static getMesSiguienteFechaCompleta(date) {
        return new Date(date.setMonth(date.getMonth() + 1));
    }

    static getMesPrevioFechaCompleta(date) {
        return new Date(date.setMonth(date.getMonth() - 1));
    }

    static getFechaCompleta() {
        return new Date();
    }

    static getLiteralMesSiguiente(date) {
        date.setMonth(date.getMonth() + 1);
        return mesesAnio[date.getMonth()];
    }
    static getLiteralMesPrevio(date) {
        date.setMonth(date.getMonth() - 1);
        return mesesAnio[date.getMonth()];
    }
    static getLiteralMesDesdeFecha(date) {
        return mesesAnio[date.getMonth()];
    }

}