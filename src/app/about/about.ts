import { Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit {


  nombre: string = 'Amilcar Gonzalo Gallo';
  titulo: string = 'Estudiante Tecnicatura Universitaria en Programación';
  
 
  nombreJuego: string = 'Aventura Cósmica 5';
  generoJuego: string = 'RPG de Ciencia Ficción';
descripcionJuego: string = 'descripción del juego, descripción del juego';
  
  intereses: string[] = ['Desarrollo de Videojuegos', 'Programación con Unity', 'Diseño de Niveles', 'Esports'];

  constructor() { }

  ngOnInit(): void {
   
  }
}
