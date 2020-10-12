import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Categories } from '../entity/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public categories: Categories[];
  public categoryCurrent: Categories;
  public title: string;
  public isSmallScreen: boolean;

  constructor(breakpointObserver: BreakpointObserver) {
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
        name: 'Personaas',
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
  }

  ngOnInit(): void {

  }

  searchFilter(filter: string): void {
    console.log(filter);
  }

  selectCategoryCurrent(filter: Categories): void {
    this.categoryCurrent = filter;
  }
}
