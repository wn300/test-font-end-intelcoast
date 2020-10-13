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

export const initialImageState: Image = {} as Image;

const reducer = createReducer(
  initialImageState,
  on(fetchImagesAction, (state) => ({})),
  on(fetchImagesSuccessAction, (state, { imageOject }) => imageOject),
  on(fetchImagesBySearchFilterAction, (state) => ({})),
  on(fetchImagesBySearchFilterSuccessAction, (state, { imageOject }) => imageOject),
  on(fetchImagesByCategoryFilterAction, (state) => ({})),
  on(fetchImagesByCategoryFilterSuccessAction, (state, { imageOject }) => imageOject),
);

export function ImageReducer(state, action) {
  return reducer(state, action);
}
