import { Routes } from '@angular/router';
import { PeliculasDB } from './features/peliculasdb/peliculasdb';
import { Cartelera } from './features/cartelera/cartelera';

export const routes: Routes = [
    {
        path: 'database',
        component: PeliculasDB
    },
    {
        path: '',
        component: Cartelera
    },
    {
        path: '**',
        redirectTo: ''
    }
];
