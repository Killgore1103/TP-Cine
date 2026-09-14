import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
  constructor(private http: HttpClient){}

  buscarPelicula(titulo: string){
      const url = `http://www.omdbapi.com/?i=tt3896198&apikey=d0b12546&s=${titulo}&type=movie`
      return this.http.get<ResultadoBusquedaInterface>(url);
    }
}
