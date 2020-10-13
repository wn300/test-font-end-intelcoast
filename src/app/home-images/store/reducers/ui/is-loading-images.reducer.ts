import { createReducer, on, Action } from '@ngrx/store';
import {
  fetchImagesAction,
  fetchImagesByCategoryFilterAction,
  fetchImagesByCategoryFilterSuccessAction,
  fetchImagesBySearchFilterAction,
  fetchImagesBySearchFilterSuccessAction,
  fetchImagesSuccessAction
} from '../../actions/home-images.action';


export const initialState = true;

const featureReducer = createReducer(
  initialState,
  on(fetchImagesAction, () => true),
  on(fetchImagesSuccessAction, () => false),
  on(fetchImagesBySearchFilterAction, () => true),
  on(fetchImagesBySearchFilterSuccessAction, () => false),
  on(fetchImagesByCategoryFilterAction, () => true),
  on(fetchImagesByCategoryFilterSuccessAction, () => false),
);

export const isLoadingImageReducer = (state: boolean, action: Action): boolean => {
  return featureReducer(state, action);
};
