import { createReducer, on } from '@ngrx/store';

import { Image } from '../../entity/image';
import {
  fetchImagesAction,
  fetchImagesByCategoryFilterAction,
  fetchImagesByCategoryFilterSuccessAction,
  fetchImagesBySearchFilterAction,
  fetchImagesBySearchFilterSuccessAction,
  fetchImagesSuccessAction
} from '../actions/home-images.action';

/**
 * Estado inicial del reducrer de imagenes
 */
export const initialImageState: Image = {} as Image;


/**
 * Reducer de imagenes y cambios de estado según la acción
 */
const reducer = createReducer(
  initialImageState,
  on(fetchImagesAction, (state) => ({})),
  on(fetchImagesSuccessAction, (state, { imageOject }) => imageOject),
  on(fetchImagesBySearchFilterAction, (state) => ({})),
  on(fetchImagesBySearchFilterSuccessAction, (state, { imageOject }) => imageOject),
  on(fetchImagesByCategoryFilterAction, (state) => ({})),
  on(fetchImagesByCategoryFilterSuccessAction, (state, { imageOject }) => imageOject),
);

/**
 * Método que sirve para obtener el reducer de categorias
 * @param state es el estado general del header para crear la categoria seleccionada
 * @param action es el action de redux que teine todos los valores asignados en la accion de categoria
 */
export function ImageReducer(state, action) {
  return reducer(state, action);
}
