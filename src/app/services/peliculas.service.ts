import { Injectable } from '@angular/core';

import {
  HttpClientModule,
  HttpClientJsonpModule,
  HttpClient,
} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private apiKey: string = 'e284617fa7dbdd32df07479265d99534';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';
  peliculas: any[] = [];
  constructor(private http: HttpClient) {}
  getCaterleta() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 11);
    let desdeStr = `${desde.getFullYear()}-0${
      desde.getMonth() + 1
    }-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-0${
      hasta.getMonth() + 1
    }-${hasta.getDate()}`;
    console.log(hastaStr);
    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}`;
    return this.http.jsonp(url, 'callback');
  }
  getPopulares() {
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }
  getPopularesNinos() {
    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'callback');
  }
  buscarPelicula(texto: string) {
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;

    return this.http.jsonp(url, 'callback').pipe(
      map((res: any) => {
        this.peliculas = res.results;
        console.log(this.peliculas);
      })
    );
  }
}
