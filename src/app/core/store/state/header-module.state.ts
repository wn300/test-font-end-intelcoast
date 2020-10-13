import { CategoryState } from '../state/category.state';
import { SarchState } from './seacrh.state';

export const HeaderFeatureName = 'headerModuleState';

export type HeaderModuleState = Readonly<{
  category: CategoryState,
  search: SarchState
}>;
