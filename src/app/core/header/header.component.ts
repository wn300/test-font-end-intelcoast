import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clone } from 'lodash';

import { Category, Header } from '../entity/header';
import { fetchHeaderCategoryFilterAction, fetchHeaderSearchFilterAction } from '../store/actions/header.actions';
import { CategoryState } from '../store/state/category.state';
import { SarchState } from '../store/state/seacrh.state';
import { AppstateWithImage } from 'src/app/home-images/store/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public categories: Category[];
  public categoryCurrent: Category;
  public title: string;
  public isSmallScreen: boolean;
  public header$: Observable<number>;
  public searchFilterParent: string;

  constructor(
    breakpointObserver: BreakpointObserver,
    private store: Store<AppstateWithImage>) {

    this.title = 'Suplos';

    this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');

    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      this.isSmallScreen = result.matches;
    });

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

    this.store.select('header').subscribe(result => {
      console.log(result);

      this.categoryCurrent = result.category;
      this.searchFilterParent = result.search;
    })
  }

  ngOnInit(): void {

  }

  searchFilter(filter: string): void {
    const newStateFilterSearch: SarchState = { search: filter };
    this.store.dispatch(fetchHeaderSearchFilterAction(newStateFilterSearch));
  }

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
}
