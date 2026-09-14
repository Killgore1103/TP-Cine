import { Component, ChangeDetectorRef } from '@angular/core';
import { Pelicula } from '../../shared/pelicula/pelicula';
import { PeliculaService } from '../../services/peliculas-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [Pelicula, FormsModule],
  templateUrl: './peliculasdb.html',
  styleUrl: './peliculasdb.css',
})
export class PeliculasDB {
  constructor (
    private servicioPeliculas: PeliculaService,
    private cdr: ChangeDetectorRef
  ) {}

  peliculasAgregadas: string[] = [];
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
        // this.cdr.detectChanges();        
      });
  }

  agregarPelicula(imdbID: string){
    this.peliculasAgregadas.push(imdbID)
    console.log(this.peliculasAgregadas);
  }

}
