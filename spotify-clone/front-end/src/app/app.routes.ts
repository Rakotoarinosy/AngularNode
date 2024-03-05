import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {path:'',
  providers: [
    HomeComponent
  ],
  children: [
    {
      path: 'home',
      title: 'Home',
      loadComponent: () => import("./pages/home/home.component").then(module => module.HomeComponent)
    },
    {
      path: 'login',
      title: 'Login',
      loadComponent: () => import('./pages/login/login.component').then(module => module.LoginComponent)
    },
    {
      path: 'song/:song_id',
      title: 'Song',
      loadComponent: () => import('./pages/song/song.component').then(module => module.SongComponent)
    }]
}
];
