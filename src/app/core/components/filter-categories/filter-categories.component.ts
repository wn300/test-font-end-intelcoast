import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categories } from '../../entity/header';

@Component({
  selector: 'app-filter-categories',
  templateUrl: './filter-categories.component.html',
  styleUrls: ['./filter-categories.component.css']
})
export class FilterCategoriesComponent implements OnInit {
  @Input() categories: Categories[];
  @Output() categoryCurrent: EventEmitter<Categories> = new EventEmitter<Categories>();

  constructor() { }

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

    this.categoryCurrent.emit(selectionNew[0]);
  }
}
