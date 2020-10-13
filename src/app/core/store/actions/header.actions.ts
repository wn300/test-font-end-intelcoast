import { createAction, props } from '@ngrx/store';
import { Category } from '../../entity/header';

export const fetchHeaderSearchFilterAction = createAction(
  '[HEADER] Search Filter',
  props<{ search: string }>()
);

export const fetchHeaderCategoryFilterAction = createAction(
  '[HEADER] Category Filter',
  props<{ category: Category }>()
);
