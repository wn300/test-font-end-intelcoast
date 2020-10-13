import { combineReducers } from '@ngrx/store';

import { headerCategoryReducer as category } from './header-category.reducer';
import { headerSearchReducer as search } from './header-search.reducer';

/**
 * Metoddo que combina los reducers de categorias y filtros de busqueda
 */
export const headerRootReducer = combineReducers({
  category,
  search
});
