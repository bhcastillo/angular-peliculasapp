import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'peliculaimagen',
})
export class PeliculaimagenPipe implements PipeTransform {

  transform(pelicula: any): unknown {

    let url ="http://image.tmdb.org/t/p/w500"
    if (!isNullOrUndefined(pelicula.backdrop_path)){
      return url+ pelicula.backdrop_path;
    } else {
      if (pelicula.poster_path) {
        url+ pelicula.poster_path;
      } 
      if (isNullOrUndefined(pelicula.backdrop_path)){
        return 'assets/img/noimage.png';
      }
      
      else {
        return 'assets/img/noimage.png';
      }
    }
  
  }
}
