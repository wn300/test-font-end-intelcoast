import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { Image } from '../../entity/image';
import { HomeImagesService } from '../../services/home-images.service';
import { fetchImagesAction, fetchImagesSuccessAction } from '../actions/home-images.action';

/**
 * Efecto para ejecutar los reducers y actualizar el estado de la aplicación de la consulta
 */
@Injectable()
export class ImagesEffect {

  /**
   * Constructor del efecto
   * @param Actions action$ parametro que instancia los actions rxjs
   * @param HomeImagesService homeImagesService servicio que peticiona al apiexpuesto por https://pixaba
   */
  constructor(
    /**
     * parametro que instancia los actions rxjs
     */
    private action$: Actions,
    /**
     * servicio que peticiona al apiexpuesto por https://pixaba
     */
    public homeImagesService: HomeImagesService) { }

  /**
   * Efecto que consulta todo y utiliza operadores rxj para manipular la dats y enviarla al store de la aplicacion
   */
  fetchImages$: Observable<Action> = createEffect(() => this.action$
    .pipe(
      ofType(fetchImagesAction),
      switchMap(action => this.homeImagesService.getAllImages$()),
      map((imageOject: Image) => fetchImagesSuccessAction({ imageOject }))
    ));
}
