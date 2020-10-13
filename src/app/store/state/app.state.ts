import { ActionReducerMap } from '@ngrx/store';
import * as header from '../../core/store/reducer/index';

/**
 * Estado general de la aplicación
 */
export interface AppState {
  /**
   * el estado inicial del heaer
   */
  header: any;
}

/**
 * reducer o reducers a intervenir en el bootstraping de la pagina
 */
export const appReducer: ActionReducerMap<AppState> = {
  header: header.headerRootReducer,
};
