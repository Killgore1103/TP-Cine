import { Component, input, output } from '@angular/core';
import { Pelicula } from '../pelicula/pelicula';
import { PeliculaInterface } from '../../core/models/pelicula-interface';

@Component({
  selector: 'app-boton-agregar',
  imports: [],
  templateUrl: './boton-agregar.html',
  styleUrl: './boton-agregar.css',
})
export class BotonAgregar {
  peliculaImdbID = input<string>();
  peliculaAgregada = output<string>();

  agregar(){
    this.peliculaAgregada.emit(this.peliculaImdbID()!);
  }
}
