import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';



const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'buscar',component: BuscarComponent},
  {path:'peliculas',component: PeliculasComponent},
  {path:'**', pathMatch: 'full',redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
