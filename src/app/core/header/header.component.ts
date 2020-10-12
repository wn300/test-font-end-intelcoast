import { Component, Input, OnInit } from '@angular/core';
import { Categories } from '../entity/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() medyaQueryParent: MediaQueryList;

  public categories: Categories[];
  public categoryCurrent: Categories;

  public title: string;
  constructor() {
    this.title = 'Suplos';

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

  selectCategory(category: any): void {
    const selectionCurrent = this.categories.filter(data => data.isActive);
    if (selectionCurrent.length > 0) {
      selectionCurrent[0].isActive = false;
    }
    const selectionNew = this.categories.filter(data => data.value === category.value);
    if (selectionNew.length > 0) {
      selectionNew[0].isActive = true;
    }

    this.categoryCurrent = selectionNew[0];
  }

}
