import { combineReducers } from '@ngrx/store';

import { AppState } from 'src/app/store/state/app.state';
import { ImageState } from '../state/images.state';
import { uiImageModuleState } from '../state/ui/ui-image-module.state';
import { UiImageRootReducer as ui } from '../reducers/ui/index';
import { ImageReducer as imageObject } from './home-images.reducer';

/**
 * Estado inicial pero con la expancion de nuevos objetos por lazy load
 */
export interface AppstateWithImage extends AppState {
  /**
   * Estado de la imagen
   */
  imageObject: ImageState;
  /**
   * Estado de loading
   */
  ui: uiImageModuleState;
}

/**
 * conbinacion de los reducers imagen y ui: estado de loading
 */
export const imageRootReducer = combineReducers({
  imageObject,
  ui
});
