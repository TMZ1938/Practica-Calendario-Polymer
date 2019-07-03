const mesesAnio = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

export class ServiceApi {
  
    static getMesSiguienteFechaCompleta(date) {
        return new Date(date.setMonth(date.getMonth() + 1));
    }

    static getMesPrevioFechaCompleta(date) {
        return new Date(date.setMonth(date.getMonth() - 1));
    }

    static getFechaCompletaActual() {
        return new Date();
    }

    static getLiteralMesSiguiente(date) {
        date.setMonth(date.getMonth() + 1);
        return getLiteralMesDesdeFecha(date);
    }
    static getLiteralMesPrevio(date) {
        date.setMonth(date.getMonth() - 1);
        return getLiteralMesDesdeFecha(date);
    }
    static getLiteralMesDesdeFecha(date) {
        return mesesAnio[date.getMonth()];
    }

    static getLiteralAnioDesdeFecha(date) {
        return date.getFullYear();
    }

    static getLiteralTimerDesdeFecha(date) {
        return date.getHours() + ":"  
            + date.getMinutes() + ":" 
            + date.getSeconds();
    }

}