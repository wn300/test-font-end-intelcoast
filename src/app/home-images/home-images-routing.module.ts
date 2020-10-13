import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeImagesComponent } from './home-images.component';

export const homeImagesRootRoute = 'home_images';

const routes: Routes = [
  {
    path: '',
    component: HomeImagesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeImagesRoutingModule { }
