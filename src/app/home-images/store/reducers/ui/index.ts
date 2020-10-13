import { combineReducers } from '@ngrx/store';

import { isLoadingImageReducer } from './is-loading-images.reducer';


export const UiImageRootReducer = combineReducers({
  isLoadingImageReducer
});
