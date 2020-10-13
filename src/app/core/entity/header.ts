/**
 * interfaz del modelo general del componente header
 */
export interface Header {
  /**
   * objeto de categoria
   */
  category: Category;
}

/**
 * interfaz del modelo de una categoria
 */
export interface Category {
  /**
   * nombre de la categoria
   */
  name: string;
  /**
   * valor de la categoria
   */
  value: string;
  /**
   * parametro booleano ue se encarga de validar si esta activo o no para cambiar el stilo de la categoria
   */
  isActive: boolean;
}
