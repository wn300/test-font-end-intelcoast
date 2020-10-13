import { combineReducers } from '@ngrx/store';

import { headerCategoryReducer as category } from './header-category.reducer';
import { headerSearchReducer as search } from './header-search.reducer';

export const headerRootReducer = combineReducers({
  category,
  search
});
