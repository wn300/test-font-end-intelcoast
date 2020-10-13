import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Componete que muestra el filtro de busqueda y captura su valor
 */
@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.css']
})
export class FilterSearchComponent {
  /**
   * Envia al padre el valor ingresado en el filtro de busqueda
   */
  @Output() sendSearchFilter: EventEmitter<string> = new EventEmitter<string>();
  /**
   * Recibe el valor actual del filtro de busqueda
   */
  @Input() searchFilter: string;

  /**
   * Método que se encarga de envierar el valor ingresado en el filtro de busqueda
   */
  search(): void {
    this.sendSearchFilter.emit(this.searchFilter);
  }

}
