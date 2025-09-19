import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Login } from './login/login';
import { Formulario } from './formulario/formulario';

export const routes: Routes = [
    {
        path:'',    
        redirectTo:'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'formulario',
        component: Formulario
    },
    {
        path: '**',
        component: Login
    },
];
