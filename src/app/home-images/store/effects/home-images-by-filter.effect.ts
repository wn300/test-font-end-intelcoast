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

@Injectable()
export class ImagesByFilterEffect {

  constructor(private action$: Actions, public homeImagesService: HomeImagesService) { }

  fetchImageBySearchfilter$: Observable<Action> = createEffect(() => this.action$
    .pipe(
      ofType(fetchImagesBySearchFilterAction),
      switchMap(action => this.homeImagesService.getImagesBySearchFilter$(action.q)),
      map((imageOject: Image) => fetchImagesBySearchFilterSuccessAction({ imageOject }))
    ));

  fetchImageByCategoryFilter$: Observable<Action> = createEffect(() => this.action$
    .pipe(
      ofType(fetchImagesByCategoryFilterAction),
      switchMap(action => this.homeImagesService.getImagesBySearchFilter$(action.category)),
      map((imageOject: Image) => fetchImagesByCategoryFilterSuccessAction({ imageOject }))
    ));
}
