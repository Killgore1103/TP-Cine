import { Component, input } from '@angular/core';
import { Pelicula } from '../pelicula/pelicula';

@Component({
  selector: 'app-boton-agregar',
  imports: [],
  templateUrl: './boton-agregar.html',
  styleUrl: './boton-agregar.css',
})
export class BotonAgregar {
  pelicula = input<Pelicula>;

  agregar(){
    console.log(this.pelicula);
  }
}
