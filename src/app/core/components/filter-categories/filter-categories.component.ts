import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../entity/header';

@Component({
  selector: 'app-filter-categories',
  templateUrl: './filter-categories.component.html',
  styleUrls: ['./filter-categories.component.css']
})
export class FilterCategoriesComponent implements OnInit {
  @Input() categories: Category[];
  @Output() categoryCurrent: EventEmitter<Category> = new EventEmitter<Category>();

  constructor() { }

  ngOnInit(): void {
  }

  selectCategory(category: any): void {
    const selectionNew = this.categories.filter(data => data.value === category.value);

    this.categoryCurrent.emit(selectionNew[0]);
  }
}
