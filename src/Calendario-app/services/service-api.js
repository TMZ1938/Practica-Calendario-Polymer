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

    static getLiteralMesDesdeFecha(date) {
        return mesesAnio[date.getMonth()];
    }

    static getLiteralAnioDesdeFecha(date) {
        return date.getFullYear();
    }

    static asegurarDosDigitos(value) {
        const stringValue = String(value);
        if (stringValue.length === 1) {
          return "0" + stringValue;
        }
        return stringValue;
    }

    static getLiteralTimerDesdeFecha() {
        const currentTime = new Date();
        return this.asegurarDosDigitos(currentTime.getHours()) + ":"  
            + this.asegurarDosDigitos(currentTime.getMinutes()) + ":" 
            + this.asegurarDosDigitos(currentTime.getSeconds());
    }

}