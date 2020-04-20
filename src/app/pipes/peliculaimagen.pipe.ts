import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'peliculaimagen',
})
export class PeliculaimagenPipe implements PipeTransform {
  transform(pelicula: any, poster:boolean = false): unknown {
    let url = 'http://image.tmdb.org/t/p/w500';
    if ( poster ) {
      return url + pelicula.poster_path;

    }
    if(isNullOrUndefined(pelicula.backdrop_path) || isNullOrUndefined(pelicula.poster_path) ){
      return 'assets/img/noimage.png';
    }
    if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
    } else {
      if (pelicula.poster_path) {
                   
       return url + pelicula.poster_path;
      } else {
        return 'assets/img/noimage.png';
      }
    }
  }
}
