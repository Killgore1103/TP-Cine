import { Component } from '@angular/core';
import { Pelicula } from '../../shared/pelicula/pelicula';
import { PeliculaService } from '../../services/peliculas-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [Pelicula, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor (private servicioPeliculas: PeliculaService) {}

  peliculasEncontradas: any[] = [];
  titulo: string = '';

  buscar() {
      this.servicioPeliculas.buscarPelicula(this.titulo).subscribe(resultado => {
        this.peliculasEncontradas = resultado.Search.map(pelicula => ({
          titulo: pelicula.Title,
          portadaUrl: pelicula.Poster,
          sinopsis: pelicula.Year,
          imdbID: pelicula.imdbID
        }))
      });
  }

}
