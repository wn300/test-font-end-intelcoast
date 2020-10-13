import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css']
})
export class FilterSearchComponent implements OnInit {
  @Output() sendSearchFilter: EventEmitter<string> = new EventEmitter<string>();
  @Input() searchFilter: string;

  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    this.sendSearchFilter.emit(this.searchFilter);
  }

}
