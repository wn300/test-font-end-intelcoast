import { createAction, props } from '@ngrx/store';
import { Image } from '../../entity/image';

/**
 * acción para iniciar el estado de la data
 */
export const fetchImagesAction = createAction(
  '[HOME IMAGES] Load images data'
);

/**
 * acción para finalizar el estado de la data
 */
export const fetchImagesSuccessAction = createAction(
  '[HOME IMAGES] Load images success',
  props<{ imageOject: Image }>()
);

/**
 * acción para iniciar el estado de la data
 */
export const fetchImagesBySearchFilterAction = createAction(
  '[HOME IMAGES] Load images data by search filter',
  props<{ q: string }>()
);

/**
 * acción para finalizar el estado de la data
 */
export const fetchImagesBySearchFilterSuccessAction = createAction(
  '[HOME IMAGES] Load images by search filter success',
  props<{ imageOject: Image }>()
);

/**
 * acción para iniciar el estado de la data
 */
export const fetchImagesByCategoryFilterAction = createAction(
  '[HOME IMAGES] Load images data by category filter',
  props<{ category: string }>()
);

/**
 * acción para finalizar el estado de la data
 */
export const fetchImagesByCategoryFilterSuccessAction = createAction(
  '[HOME IMAGES] Load images by category filter success',
  props<{ imageOject: Image }>()
);

