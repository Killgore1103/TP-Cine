import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeliculaInterface } from '../../core/models/pelicula-interface';
import { BotonAgregar } from '../boton-agregar/boton-agregar';

@Component({
  selector: 'app-pelicula',
  imports: [FormsModule, BotonAgregar],
  templateUrl: './pelicula.html',
  styleUrl: './pelicula.css',
})
export class Pelicula {
  peliculas = input<PeliculaInterface[]>([]);
  peliculaAgregada = output<string>();

  agregarPelicula(imdbID: string) {
    this.peliculaAgregada.emit(imdbID)
  }
}
