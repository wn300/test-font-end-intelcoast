import { createReducer, on, Action } from '@ngrx/store';
import {
  fetchImagesAction,
  fetchImagesByCategoryFilterAction,
  fetchImagesByCategoryFilterSuccessAction,
  fetchImagesBySearchFilterAction,
  fetchImagesBySearchFilterSuccessAction,
  fetchImagesSuccessAction
} from '../../actions/home-images.action';

/**
 * estado inicial del reducer
 */
export const initialState = true;

/**
 * reducer para cambiar de estado la carga de la infomación
 */
const featureReducer = createReducer(
  initialState,
  on(fetchImagesAction, () => true),
  on(fetchImagesSuccessAction, () => false),
  on(fetchImagesBySearchFilterAction, () => true),
  on(fetchImagesBySearchFilterSuccessAction, () => false),
  on(fetchImagesByCategoryFilterAction, () => true),
  on(fetchImagesByCategoryFilterSuccessAction, () => false),
);

/**
 * Método que sirve para obtener el reducer de categorias
 * @param state es el estado general del header para crear la categoria seleccionada
 * @param action es el action de redux que teine todos los valores asignados en la accion de categoria
 */
export const isLoadingImageReducer = (state: boolean, action: Action): boolean => {
  return featureReducer(state, action);
};
