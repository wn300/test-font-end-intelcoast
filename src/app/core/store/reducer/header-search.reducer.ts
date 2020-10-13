import { createReducer, on } from '@ngrx/store';
import { fetchHeaderSearchFilterAction } from '../actions/header.actions';

/**
 * Estado inicial del reducer para cargar la busqueda ingresada al store
 */
export const initialState = '';

/**
 * reducer de la busqueda con su estado inicial y final
 */
const _headerSearchReducer = createReducer(
  initialState,
  on(fetchHeaderSearchFilterAction, (state, { search }) => search),
);

/**
 * Método que sirve para obtener el reducer del filtro de busqueda
 * @param state es el estado general del header para crear la busqueda ingresada
 * @param action es el action de redux que teine todos los valores asignados en la accion de las busqueda
 */
export function headerSearchReducer(state, action) {
  return _headerSearchReducer(state, action);
}
