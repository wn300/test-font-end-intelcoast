import { CategoryState } from '../state/category.state';
import { SarchState } from './seacrh.state';

/**
 * Variable para nombrar el estado general del header
 */
export const HeaderFeatureName = 'headerModuleState';

/**
 * Combinacion de los estados de busqueda y categoria
 */
export type HeaderModuleState = Readonly<{
  category: CategoryState,
  search: SarchState
}>;
