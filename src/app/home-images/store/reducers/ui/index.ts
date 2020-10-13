import { combineReducers } from '@ngrx/store';

import { isLoadingImageReducer } from './is-loading-images.reducer';

/**
 * Combinación de reducers loading
 */

export const UiImageRootReducer = combineReducers({
  isLoadingImageReducer
});
