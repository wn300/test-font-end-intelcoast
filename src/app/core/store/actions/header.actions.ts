import { createAction, props } from '@ngrx/store';
import { Category } from '../../entity/header';

/**
 * Action de redux que permite interactuar con el estado del header para el filtro de busqueda
 */
export const fetchHeaderSearchFilterAction = createAction(
  '[HEADER] Search Filter',
  props<{ search: string }>()
);

/**
 * Action de redux que permite interactuar con el estado del header para el filtro de categoria
 */
export const fetchHeaderCategoryFilterAction = createAction(
  '[HEADER] Category Filter',
  props<{ category: Category }>()
);
