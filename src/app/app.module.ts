import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientJsonpModule , HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './pages/template/nav-bar/nav-bar.component';
import { DemoComponent } from './pages/demo/demo.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { PeliculaimagenPipe } from './pipes/peliculaimagen.pipe';
import { GaleriaComponent } from './pages/home/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    HomeComponent,
    NavBarComponent,
    DemoComponent,
    PeliculasComponent,
    PeliculaimagenPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
