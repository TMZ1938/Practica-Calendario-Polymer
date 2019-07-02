import { ServiceApi } from '../../services/service-api';
// definimos un estado inicial. Si no se tiene estado, al arrancar la aplicación, se tomarán estos valores.
const estadoInicial = {
  date: ServiceApi.getTime()
}

// creamos y exportamos la función del reducer
export const reducer = (state = estadoInicial, action) => {
  switch(action.type) {
    case "MES_SIGUIENTE":
      return {
        ...state,
        date: '' //Sumar un mes a la fecha actual
      }
    case "MES_PREVIO":
        return {
          ...state,
          date: '' //Restar un mes a la fecha actual
        }    
    default:
      return state;
  }
}