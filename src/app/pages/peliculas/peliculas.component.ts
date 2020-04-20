import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {
  pelicula: any;
  regresarA: string;
  busqueda:string="";
  constructor(public _ps: PeliculasService, public route: ActivatedRoute) {
    this.route.params.subscribe((parametros) => {
      this.regresarA = parametros['pag'];
      if( parametros['busqueda']){
        this.busqueda = parametros['busqueda']
      }
      this._ps.getPelicula(parametros['id']).subscribe((pelicula) => {
        
        this.pelicula = pelicula;
      });
    });
  }
  ngOnInit(): void {}
}
