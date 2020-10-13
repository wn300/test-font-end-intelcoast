import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../entity/header';

/**
 * Componete que muestra las categorias y las selecciona
 */
@Component({
  selector: 'app-filter-categories',
  templateUrl: './filter-categories.component.html',
  styleUrls: ['./filter-categories.component.css']
})
export class FilterCategoriesComponent {
  /**
   * Recibe las categiroias del componente padre
   */
  @Input() categories: Category[];
  /**
   * Recibe la categiroias actual del componente padre
   */
  @Output() categoryCurrent: EventEmitter<Category> = new EventEmitter<Category>();

  /**
   * Método que se encarga de seleccionar la categoria de la lista
   * @param Category category  Objeto de la categoria seleccionada
   * @example selectCategory(buildinig)
   */
  selectCategory(category: Category): void {
    const selectionNew = this.categories.filter(data => data.value === category.value);
    this.categoryCurrent.emit(selectionNew[0]);
  }
}
