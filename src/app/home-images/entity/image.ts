/**
 * Interfaz del modelo de la respuesta get del api de imagenes
 */
export interface Image {
  /**
   * total de registroe
   */
  total: number;
  /**
   * total de imagenes
   */
  totalHits: number;
  /**
   * arreglo  de imagenes
   */
  hits: Hit[];
}

/**
 * Interfaz del modelo de la respuesta get del api de cada imagen
 */
export interface Hit {
  /**
   * id del registro
   */
  id: number;
  /**
   * url de la pagina web
   */
  pageURL: string;
  /**
   * tipo de la imagen
   */
  type: string;
  /**
   * los tags relacionados a la imagen
   */
  tags: string;
  /**
   * previsualización de la imagen
   */
  previewURL: string;
  /**
   * ancho de la previsualización
   */
  previewWidth: number;
  /**
   * alto de la previsualización
   */
  previewHeight: number;
  /**
   * formato web de la url
   */
  webformatURL: string;
  /**
   * formato web del ancho
   */
  webformatWidth: number;
  /**
   * formato web del largo
   */
  webformatHeight: number;
  /**
   * url de la imagen a escala grande
   */
  largeImageURL: string;
  /**
   * ancho de la imagen grande
   */
  imageWidth: number;
  /**
   * alto de la imagen grande
   */
  imageHeight: number;
  /**
   * tamaño de la imagen
   */
  imageSize: number;
  /**
   * vistas de la imagen
   */
  views: number;
  /**
   * descargas de la imagen
   */
  downloads: number;
  /**
   * numero de favoritos de la imagen
   */
  favorites: number;
  /**
   * likes de la imagen
   */
  likes: number;
  /**
   * comenarios de la imagen
   */
  comments: number;
  /**
   * id del usuario
   */
  user_id: number;
  /**
   * usuario
   */
  user: string;
  /**
   * usuaro de la imagen
   */
  userImageURL: string;
}
