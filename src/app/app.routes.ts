import { Routes } from '@angular/router';

export const routes: Routes = [
   {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home',
     } ,
   {
    path: 'home',
    title:'Главная страница',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
   } ,
 
   {
      path: 'ad-page',
      loadComponent: () => import('./pages/ad-page/ad-page.component').then(c => c.AdPageComponent)
     } ,

];
