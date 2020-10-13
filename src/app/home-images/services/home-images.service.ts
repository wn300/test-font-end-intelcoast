import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Image } from '../entity/image';

/**
 * Servicio que consulta las imagenes por sus diferente filtros
 */
@Injectable({
  providedIn: 'root'
})
export class HomeImagesService {
  /**
   * es la llave genereada para consumir el api
   */
  public key: string;

  /**
   * Constructor del servicio
   * @param HttpClient http es el tipo habilitado por angular para realizar peticiones api rest con protocolos http
   */
  constructor(
    /**
     * es el tipo habilitado por angular para realizar peticiones api rest con protocolos http
     */
    public http: HttpClient
    ) {
    this.key = '13119377-fc7e10c6305a7de49da6ecb25';
  }

  /**
   * Metodo que consulta todas las imgenes
   * @example getAllImages$()
   */
  getAllImages$(): Observable<Image> {
    return this.http.get(`${environment.server}${environment.api}?key=${this.key}&lang=es`).pipe(
      map((data: Image) => data)
    );
  }

  /**
   * Metodo que consulta todas las imgenes por algún filtro de busqueda
   * @example getImagesBySearchFilter$(perritos)
   */
  getImagesBySearchFilter$(searchFillter: string): Observable<Image> {
    return this.http.get(`${environment.server}${environment.api}?key=${this.key}&lang=es&q=${searchFillter}`).pipe(
      map((data: Image) => data)
    );
  }

  /**
   * Metodo que consulta todas las imgenes por categoias
   * @example getImagesByCategoryFilter$(science)
   */
  getImagesByCategoryFilter$(category: string): Observable<Image> {
    return this.http.get(`${environment.server}${environment.api}?key=${this.key}&lang=es&category=${category}`).pipe(
      map((data: Image) => data)
    );
  }
}
