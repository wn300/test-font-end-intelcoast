import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Image } from '../entity/image';

@Injectable({
  providedIn: 'root'
})
export class HomeImagesService {
  public key: string;

  constructor(public http: HttpClient) {
    this.key = '13119377-fc7e10c6305a7de49da6ecb25';
  }

  getAllImages$(): Observable<Image> {
    return this.http.get(`${environment.server}${environment.api}?key=${this.key}&lang=es`).pipe(
      map((data: Image) => data)
    );
  }

  getImagesBySearchFilter$(searchFillter: string): Observable<Image> {
    return this.http.get(`${environment.server}${environment.api}?key=${this.key}&lang=es&q=${searchFillter}`).pipe(
      map((data: Image) => data)
    );
  }

  getImagesByCategoryFilter$(category: string): Observable<Image> {
    return this.http.get(`${environment.server}${environment.api}?key=${this.key}&lang=es&category=${category}`).pipe(
      map((data: Image) => data)
    );
  }
}
