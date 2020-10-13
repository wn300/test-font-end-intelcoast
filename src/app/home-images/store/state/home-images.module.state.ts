import { ImageState } from './images.state';
import { uiImageModuleState } from './ui/ui-image-module.state';

/**
 * Constante de nombre del stado para cuando es invocada
 */
export const ImageFeatureName = 'ImagesModuleState';

/**
 * Estado general del modulo de imagenes
 */
export type ImageModuleState = Readonly<{
  imageObject: ImageState;
  ui: uiImageModuleState;
}>;
