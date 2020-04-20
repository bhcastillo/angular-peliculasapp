import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  buscar: string = '';
  constructor(public _ps:PeliculasService) {}

  ngOnInit(): void {}
  buscarPelicula() {
    if(this.buscar.length===0){
      return;
    }
    this._ps.buscarPelicula(this.buscar).subscribe()
  }
}
