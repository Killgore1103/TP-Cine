import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeliculaInterface } from '../../core/models/pelicula-interface';
import { Pelicula } from '../../shared/pelicula/pelicula';
import { SupabaseService } from '../../services/supabase-service';

@Component({
  selector: 'app-cartelera',
  imports: [FormsModule, Pelicula],
  templateUrl: './cartelera.html',
  styleUrl: './cartelera.css',
})
export class Cartelera {
  constructor (private supabaseService: SupabaseService){}

  peliculas: any[] = [];
  titulo: string = '';

  ngOnInit() {
    this.supabaseService.obtenerPeliculas().then(resultado => {
      this.peliculas = (resultado.data ?? []).map(pelicula => ({
        titulo: pelicula.Title,
        portadaUrl: pelicula.Poster,
        sinopsis: pelicula.Year,
        imdbID: pelicula.imdbID
      }))
      console.log(this.peliculas);
      
    })
  }
}
