import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { clone } from 'lodash';

import { Category } from '../entity/header';
import { fetchHeaderCategoryFilterAction, fetchHeaderSearchFilterAction } from '../store/actions/header.actions';
import { CategoryState } from '../store/state/category.state';
import { SarchState } from '../store/state/seacrh.state';
import { AppstateWithImage } from 'src/app/home-images/store/reducers';

/**
 * Componete Header de la aplicación
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  /**
   * variable para guardar las suscripciones y destruirlas al cierre del componente
   */
  public subscription: Subscription[] = [];
  /**
   * @ignore
   */
  public categories: Category[];
  /**
   * @ignore
   */
  public categoryCurrent: Category;
  /**
   * @ignore
   */
  public title: string;
  /**
   * @ignore
   */
  public isSmallScreen: boolean;
  /**
   * @ignore
   */
  public header$: Observable<number>;
  /**
   * @ignore
   */
  public searchFilterParent: string;

  /**
   * Constructor del componente
   * @param BreakpointObserver breakpointObserver Se encarga de escuchar si existe algun cambo en la resolución de a pantalla
   * @param Store <AppstateWithImage> store Tiene todas las propiedades del store de redux de la apliacación.
   */
  constructor(breakpointObserver: BreakpointObserver, private store: Store<AppstateWithImage>) {

    this.title = 'Suplos';

    this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');

    this.subscription.push(
      breakpointObserver.observe([
        Breakpoints.HandsetLandscape,
        Breakpoints.HandsetPortrait
      ]).subscribe(result => {
        this.isSmallScreen = result.matches;
      })
    );

    this.categoryCurrent = {
      name: 'Todas las categorias',
      value: 'all',
      isActive: true,
    };

    this.categories = [
      {
        name: 'Todas las categorias',
        value: 'all',
        isActive: true,
      },
      {
        name: 'Ciencia',
        value: 'science',
        isActive: false,
      },
      {
        name: 'Educación',
        value: 'education',
        isActive: false,
      },
      {
        name: 'Personas',
        value: 'people',
        isActive: false,
      },
      {
        name: 'Sentimientos',
        value: 'feelings',
        isActive: false,
      },
      {
        name: 'Computación',
        value: 'computer',
        isActive: false,
      },
      {
        name: 'Edificios',
        value: 'buildings',
        isActive: false,
      },
    ];

    this.subscription.push(
      this.store.select('header').subscribe(result => {
        this.categoryCurrent = result.category;
        this.searchFilterParent = result.search;
      })
    );
  }

  /**
   * Método que se encarga de obtener el filtro de busqueda y setearlo al store de redux como un nuevo estado de search
   * @param string filter Es la variable de busqueda que el usuario digita manualmente
   * @example searchFilter(Futbol)
   */
  searchFilter(filter: string): void {
    const newStateFilterSearch: SarchState = { search: filter };
    this.store.dispatch(fetchHeaderSearchFilterAction(newStateFilterSearch));
  }

  /**
   * Método que se encarga de obtener el filtro de categoria y setearlo al store de redux como un nuevo estado de search
   * @param string  filter Es la variable de busqueda que el usuario selecciona
   * @example selectCategoryCurrent(building)
   */
  selectCategoryCurrent(filter: Category): void {
    this.categoryCurrent = clone(filter);

    const copyCategory = this.categories;
    const selectionCurrent = copyCategory.filter(data => data.isActive);

    if (selectionCurrent.length > 0) {
      selectionCurrent[0].isActive = false;
    }

    const selectionNew = copyCategory.filter(data => data.value === this.categoryCurrent.value);
    if (selectionNew.length > 0) {
      selectionNew[0].isActive = true;
    }

    const newStateFilterCategory: CategoryState = { category: this.categoryCurrent };
    this.store.dispatch(fetchHeaderCategoryFilterAction(newStateFilterCategory));
  }

  /**
   * Ciclo de vida del conponente que destruye las suscripciones
   */
  ngOnDestroy(): void {
    this.subscription.forEach(subscrition => subscrition.unsubscribe);
  }
}
