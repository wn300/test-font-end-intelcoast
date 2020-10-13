import { createAction, props } from '@ngrx/store';
import { Image } from '../../entity/image';

export const fetchImagesAction = createAction(
  '[HOME IMAGES] Load images data'
);

export const fetchImagesSuccessAction = createAction(
  '[HOME IMAGES] Load images success',
  props<{ imageOject: Image }>()
);

export const fetchImagesBySearchFilterAction = createAction(
  '[HOME IMAGES] Load images data by search filter',
  props<{ q: string }>()
);

export const fetchImagesBySearchFilterSuccessAction = createAction(
  '[HOME IMAGES] Load images by search filter success',
  props<{ imageOject: Image }>()
);

export const fetchImagesByCategoryFilterAction = createAction(
  '[HOME IMAGES] Load images data by category filter',
  props<{ category: string }>()
);

export const fetchImagesByCategoryFilterSuccessAction = createAction(
  '[HOME IMAGES] Load images by category filter success',
  props<{ imageOject: Image }>()
);

