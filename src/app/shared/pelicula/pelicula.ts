import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeliculaInterface } from '../../core/models/pelicula-interface';
import { PeliculaService } from '../../services/peliculas-service';

@Component({
  selector: 'app-pelicula',
  imports: [FormsModule],
  templateUrl: './pelicula.html',
  styleUrl: './pelicula.css',
})
export class Pelicula {
  peliculas = input<PeliculaInterface[]>([]);


}
