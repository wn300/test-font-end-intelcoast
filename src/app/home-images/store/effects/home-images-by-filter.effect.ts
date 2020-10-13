import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { Image } from '../../entity/image';
import { HomeImagesService } from '../../services/home-images.service';
import {
  fetchImagesByCategoryFilterAction,
  fetchImagesByCategoryFilterSuccessAction,
  fetchImagesBySearchFilterAction,
  fetchImagesBySearchFilterSuccessAction
} from '../actions/home-images.action';

/**
 * Efecto para ejecutar los reducers y actualizar el estado de la aplicación cuando se filtra la consulta
 */
@Injectable()
export class ImagesByFilterEffect {

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
   * Efecto que consulta por filtro de busqueda y utiliza operadores rxj para manipular la dats y enviarla al store de la aplicacion
   */
  fetchImageBySearchfilter$: Observable<Action> = createEffect(() => this.action$
    .pipe(
      ofType(fetchImagesBySearchFilterAction),
      switchMap(action => this.homeImagesService.getImagesBySearchFilter$(action.q)),
      map((imageOject: Image) => fetchImagesBySearchFilterSuccessAction({ imageOject }))
    ));

  /**
   * Efecto que consulta por categoria y utiliza operadores rxj para manipular la dats y enviarla al store de la aplicacion
   */
  fetchImageByCategoryFilter$: Observable<Action> = createEffect(() =>
    this.action$
      .pipe(
        ofType(fetchImagesByCategoryFilterAction),
        switchMap(action => this.homeImagesService.getImagesBySearchFilter$(action.category)),
        map((imageOject: Image) => fetchImagesByCategoryFilterSuccessAction({ imageOject }))
      ));
}
