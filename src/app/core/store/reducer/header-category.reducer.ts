import { createReducer, on } from '@ngrx/store';
import { Category } from '../../entity/header';
import { fetchHeaderCategoryFilterAction } from '../actions/header.actions';

/**
 * Estado inicial del reducer para cargar la categoria seleccionada al store
 */
export const initialState: Category = {
  name: 'Todas las categorias',
  value: 'all',
  isActive: true,
};

/**
 * reducer de categoria con su estado inicial y final
 */
const _headerCategoryReducer = createReducer(
  initialState,
  on(fetchHeaderCategoryFilterAction, (state, { category }) => category),
);

/**
 * Método que sirve para obtener el reducer de categorias
 * @param state es el estado general del header para crear la categoria seleccionada
 * @param action es el action de redux que teine todos los valores asignados en la accion de categoria
 */
export function headerCategoryReducer(state, action) {
  return _headerCategoryReducer(state, action);
}
