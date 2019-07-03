import { ServiceApi } from '../../services/service-api';
// definimos un estado inicial. Si no se tiene estado, al arrancar la aplicación, se tomarán estos valores.
const estadoInicial = {
  fechaSeleccionada: '',
  fechaCompleta: ServiceApi.getFechaCompletaActual()
}

// creamos y exportamos la función del reducer
export const reducer = (state = estadoInicial, action) => {
  switch(action.type) {
    case "MES_SIGUIENTE":
      return {
        ...state,
        fechaCompleta: ServiceApi.getMesSiguienteFechaCompleta(state.fechaCompleta)
      }
    case "MES_PREVIO":
        return {
          ...state,
          fechaCompleta: ServiceApi.getMesPrevioFechaCompleta(state.fechaCompleta)
      }
    case "DIA_SELECCIONADO":
      return {
        ...state,
        fechaSeleccionada: ServiceApi.getFechaCompletaActual()
      }
    default:
      return state;
  }
}