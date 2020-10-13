import { createReducer, on } from '@ngrx/store';
import { Category } from '../../entity/header';
import { fetchHeaderCategoryFilterAction } from '../actions/header.actions';

export const initialState: Category = {
  name: 'Todas las categorias',
  value: 'all',
  isActive: true,
};

const _headerCategoryReducer = createReducer(
  initialState,
  on(fetchHeaderCategoryFilterAction, (state, { category }) => category),
);

export function headerCategoryReducer(state, action) {
  return _headerCategoryReducer(state, action);
}
