import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

/**
 * @constant
 * @type {Routes}
 * constante que guarda as rotas
 */
export const ROUTES : Routes = [
    {path: '' , component: DashboardComponent},
    {path: 'siglas' , loadChildren: () => import('../lista-siglas/lista-siglas.module').then(m => m.ListaSiglasModule)}
]