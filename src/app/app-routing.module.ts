import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { homeImagesRootRoute } from './home-images/home-images-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: homeImagesRootRoute,
    pathMatch: 'full'
  },
  {
    path: homeImagesRootRoute,
    loadChildren: () =>
      import('./home-images/home-images.module').then(m => m.HomeImagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
