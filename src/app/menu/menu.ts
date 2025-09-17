import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Home } from '../home/home';
import { About } from '../about/about';
import { Login } from '../login/login';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {

}
