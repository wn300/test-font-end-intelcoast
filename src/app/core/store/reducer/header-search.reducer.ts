import { createReducer, on } from '@ngrx/store';
import { fetchHeaderSearchFilterAction } from '../actions/header.actions';

export const initialState = '';

const _headerSearchReducer = createReducer(
  initialState,
  on(fetchHeaderSearchFilterAction, (state, { search }) => search),
);

export function headerSearchReducer(state, action) {
  return _headerSearchReducer(state, action);
}
