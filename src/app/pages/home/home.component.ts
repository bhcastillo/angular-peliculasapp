import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cartelera: any;
  populares: any;
  popularesNinos: any;
  constructor(public _ps: PeliculasService) {
    this._ps
      .getCaterleta()
      .subscribe((data: any) => (this.cartelera = data.results));
      this._ps
      .getPopulares()
      .subscribe((data: any) => (this.populares = data.results));
      this._ps
      .getPopularesNinos()
      .subscribe((data: any) => (this.popularesNinos = data.results));
  }

  ngOnInit(): void {}
}
