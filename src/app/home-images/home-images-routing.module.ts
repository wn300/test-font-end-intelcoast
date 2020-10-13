import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeImagesComponent } from './home-images.component';

/**
 * variable para nombrar la rutadel modulo
 */
export const homeImagesRootRoute = 'home_images';

/**
 * sistema routing del modulo de images
 */
const routes: Routes = [
  {
    path: '',
    component: HomeImagesComponent,
  }
];

/**
 * modulo del ruteo de las images
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeImagesRoutingModule { }
