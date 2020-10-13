import { Category } from '../../entity/header';

/**
 * Estado de la categoria para almacenarla de esta forma al store de redux
 */
export interface CategoryState {
  /**
   * propiead de la categoria
   */
  category: Category;
}

