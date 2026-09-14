import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nombreUsuario: string = "Hola"
  parrafo : string = "Hola Mundo"

  funcion(){
    alert(this.nombreUsuario)
  }
}
