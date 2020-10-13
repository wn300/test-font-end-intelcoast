import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { isEqual } from 'lodash';
import { MatDialog } from '@angular/material/dialog';

import { HomeImagesService } from './services/home-images.service';
import { fetchImagesAction, fetchImagesByCategoryFilterAction, fetchImagesBySearchFilterAction } from './store/actions/home-images.action';
import { AppstateWithImage } from './store/reducers';
import { Category } from '../core/entity/header';
import { SarchState } from '../core/store/state/seacrh.state';
import { fetchHeaderCategoryFilterAction, fetchHeaderSearchFilterAction } from '../core/store/actions/header.actions';
import { CategoryState } from '../core/store/state/category.state';
import { Hit } from './entity/image';
import { ModalImageComponent } from './components/modal-image/modal-image.component';

@Component({
  selector: 'app-home-images',
  templateUrl: './home-images.component.html',
  styleUrls: ['./home-images.component.css']
})
export class HomeImagesComponent implements OnInit {
  public header$: any;
  public image$: any;
  public images: Hit[] = [];
  public isLoading: boolean;
  public nameFilter: string;

  constructor(private store: Store<AppstateWithImage>, public homeImagesService: HomeImagesService, public dialog: MatDialog) {
    this.header$ = this.store.select('header');
    this.image$ = this.store.select('imageObject');

    const categoryInital: Category = {
      name: 'Todas las categorias', value: 'all', isActive: true
    };
    this.nameFilter = categoryInital.name;

    let category: Category = categoryInital;
    let search = '';

    this.header$.subscribe(result => {
      if (!isEqual(category.name, result.category.name) && result.category.name !== 'Todas las categorias') {
        category = result.category;
        this.nameFilter = category.name;
        search = '';
        const newStateFilterSearch: SarchState = { search };
        this.store.dispatch(fetchHeaderSearchFilterAction(newStateFilterSearch));
        this.fetchImagesByCategory(category.value);
      } else if (!isEqual(search, result.search) && result.search !== '') {
        search = result.search;
        this.nameFilter = search;
        category = categoryInital;
        const newStateFilterCategory: CategoryState = { category };
        this.store.dispatch(fetchHeaderCategoryFilterAction(newStateFilterCategory));
        this.fetchImagesBySearch(search);
      }

      if (result.search === '' && result.category.name === 'Todas las categorias') {
        this.fetchAllImages();
        this.nameFilter = result.category.name;
      }
    });

    this.image$.subscribe(result => {
      this.isLoading = result.ui.isLoadingImageReducer;
      this.images = result.imageObject.hits;
    });
  }

  ngOnInit(): void {
  }

  openDialog(image: Hit): void {
    const dialogRef = this.dialog.open(ModalImageComponent, {
      width: '90%',
      data: image.largeImageURL
    });

  }

  fetchImagesBySearch(q: string): void {
    const searchFilter = { q };
    this.store.dispatch(fetchImagesBySearchFilterAction(searchFilter));
  }

  fetchImagesByCategory(category: string): void {
    const categoryFilter = { category };
    this.store.dispatch(fetchImagesByCategoryFilterAction(categoryFilter));
  }

  fetchAllImages(): void {
    this.store.dispatch(fetchImagesAction());
  }

}
