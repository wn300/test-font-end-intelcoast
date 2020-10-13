import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { Image } from '../../entity/image';
import { HomeImagesService } from '../../services/home-images.service';
import { fetchImagesAction, fetchImagesSuccessAction } from '../actions/home-images.action';

@Injectable()
export class ImagesEffect {

  constructor(private action$: Actions, public homeImagesService: HomeImagesService) { }

  fetchImages$: Observable<Action> = createEffect(() => this.action$
    .pipe(
      ofType(fetchImagesAction),
      switchMap(action => this.homeImagesService.getAllImages$()),
      map((imageOject: Image) => fetchImagesSuccessAction({ imageOject }))
    ));
}
