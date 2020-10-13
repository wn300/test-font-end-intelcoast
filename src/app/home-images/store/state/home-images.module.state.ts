import { ImageState } from './images.state';
import { uiImageModuleState } from './ui/ui-image-module.state';

export const ImageFeatureName = 'ImagesModuleState';

export type ProdctsModuleState = Readonly<{
  imageObject: ImageState;
  ui: uiImageModuleState;
}>;
