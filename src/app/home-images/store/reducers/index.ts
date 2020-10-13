import { combineReducers } from '@ngrx/store';

import { AppState } from 'src/app/store/state/app.state';
import { ImageState } from '../state/images.state';
import { uiImageModuleState } from '../state/ui/ui-image-module.state';
import { UiImageRootReducer as ui } from '../reducers/ui/index';
import { ImageReducer as imageObject } from './home-images.reducer';

export interface AppstateWithImage extends AppState {
  imageObject: ImageState;
  ui: uiImageModuleState;
}

export const imageRootReducer = combineReducers({
  imageObject,
  ui
});
