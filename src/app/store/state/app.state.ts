import { ActionReducerMap } from '@ngrx/store';
import * as header from '../../core/store/reducer/index';

export interface AppState {
  header: any;
}

export const appReducer: ActionReducerMap<AppState> = {
  header: header.headerRootReducer,
};
