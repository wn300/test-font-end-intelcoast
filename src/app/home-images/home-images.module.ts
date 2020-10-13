import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HomeImagesRoutingModule } from './home-images-routing.module';
import { HomeImagesService } from './services/home-images.service';
import { imageRootReducer } from './store/reducers';
import { EffectsHomeImages } from './store/effects';
import { HomeImagesComponent } from './home-images.component';
import { ModalImageComponent } from './components/modal-image/modal-image.component';

@NgModule({
  declarations: [HomeImagesComponent, ModalImageComponent],
  providers: [
    HomeImagesService
  ],
  imports: [
    CommonModule,
    HomeImagesRoutingModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    StoreModule.forFeature('imageObject', imageRootReducer),
    EffectsModule.forFeature(EffectsHomeImages)
  ]
})
export class HomeImagesModule { }
