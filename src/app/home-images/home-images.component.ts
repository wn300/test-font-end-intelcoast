import { Component, OnDestroy } from '@angular/core';
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
import { Subscription } from 'rxjs';

/**
 * Componente principar de la carga de las imagenes
 */
@Component({
  selector: 'app-home-images',
  templateUrl: './home-images.component.html',
  styleUrls: ['./home-images.component.css']
})
export class HomeImagesComponent implements OnDestroy {
  /**
   * variable para guardar las suscripciones y destruirlas al cierre del componente
   */
  public subscription: Subscription[] = [];
  /**
   * @ignore
   */
  public header$: any;
  /**
   * @ignore
   */
  public image$: any;
  /**
   * @ignore
   */
  public images: Hit[] = [];
  /**
   * @ignore
   */
  public isLoading: boolean;
  /**
   * @ignore
   */
  public nameFilter: string;

  /**
   * Constructor del componente
   * @param Store<AppstateWithImage> store es el store  de la aplicacion con el estado actual
   * @param MatDialog dialog instancia del dialog de material para visualizarla imagen completa
   */
  constructor(
    /**
     * store de la aplicacion
     */
    private store: Store<AppstateWithImage>,
    /**
     * dialog de material angular
     */
    public dialog: MatDialog) {

    this.header$ = this.store.select('header');
    this.image$ = this.store.select('imageObject');

    const categoryInital: Category = {
      name: 'Todas las categorias', value: 'all', isActive: true
    };
    this.nameFilter = categoryInital.name;

    let category: Category = categoryInital;
    let search = '';

    this.subscription.push(
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
      })
    );

    this.subscription.push(
      this.image$.subscribe(result => {
        this.isLoading = result.ui.isLoadingImageReducer;
        this.images = result.imageObject.hits;
      })
    );
  }

  /**
   * Método que abre el dialog
   * @param Hit image objeo de la imagen seleccionada para visualizar en dialog
   * @example  openDialog({  "id": 5638016,
   *         "pageURL": "https://pixabay.com/illustrations/girl-boy-muslim-hijab-islam-5638016/",
   *         "type": "illustration",
   *         "tags": "girl, boy, muslim",
   *         "previewURL": "https://cdn.pixabay.com/photo/2020/10/08/13/47/girl-5638016_150.jpg",
   *         "previewWidth": 150,
   *         "previewHeight": 95,
   *         "webformatURL": "https://pixabay.com/get/53e6d64b4a53aa14f1dc84609629347f1436dde2544c704f752d7ed79448c750_640.jpg",
   *         "webformatWidth": 640,
   *         "webformatHeight": 404,
   *         "largeImageURL": "https://pixabay.com/get/53e6d64b4a53aa14f6da8c7dda79367d143ed7e654566c48732f79d1944ec05ab0_1280.jpg",
   *         "imageWidth": 5937,
   *         "imageHeight": 3744,
   *         "imageSize": 1387329,
   *         "views": 4304,
   *         "downloads": 4132,
   *         "favorites": 47,
   *         "likes": 58,
   *         "comments": 36,
   *         "user_id": 18371568,
   *         "user": "BPHOTOGRAPHY",
   *         "userImageURL": "https://cdn.pixabay.com/user/2020/10/09/12-25-34-235_250x250.jpg"})
   */
  openDialog(image: Hit): void {
    const dialogRef = this.dialog.open(ModalImageComponent, {
      width: '90%',
      data: image.largeImageURL
    });

  }
  /**
   * Metodo que consulta las imagennes por el filtro de busqueda y guarda en el store de la aplicación
   * @param string q es l parametro query que va a consultar por el filtro de busqueda
   * @example fetchImagesBySearch(futbol)
   */
  fetchImagesBySearch(q: string): void {
    const searchFilter = { q };
    this.store.dispatch(fetchImagesBySearchFilterAction(searchFilter));
  }

  /**
   * Metodo que consulta las imagennes por el filtro de categorias y guarda en el store de la aplicación
   * @param string category  parametro que va a consultar por el filtro de categorias
   * @example fetchImagesByCategory(science)
   */
  fetchImagesByCategory(category: string): void {
    const categoryFilter = { category };
    this.store.dispatch(fetchImagesByCategoryFilterAction(categoryFilter));
  }

  /**
   * Metodo  que consulta todas las imagenes
   * @example fetchAllImages()
   */
  fetchAllImages(): void {
    this.store.dispatch(fetchImagesAction());
  }

  /**
   * Ciclo de vida del conponente que destruye las suscripciones
   */
  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe);
  }

}
