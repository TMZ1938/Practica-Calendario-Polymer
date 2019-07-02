import { ServiceApi } from '../../services/service-api';
// definimos un estado inicial. Si no se tiene estado, al arrancar la aplicación, se tomarán estos valores.
const estadoInicial = {
  date: ServiceApi.getFechaCompleta()
}

// creamos y exportamos la función del reducer
export const reducer = (state = estadoInicial, action) => {
  switch(action.type) {
    case "MES_SIGUIENTE":
      return {
        ...state,
        date: ServiceApi.getMesSiguiente() //Sumar un mes a la fecha actual
      }
    case "MES_PREVIO":
        return {
          ...state,
          date: ServiceApi.getMesPrevio() //Restar un mes a la fecha actual
        }    
    default:
      return state;
  }
}