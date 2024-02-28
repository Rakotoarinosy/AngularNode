import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';

const routes:Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import("./app/app.routes").then(module => module.routes)
  }
];

bootstrapApplication(AppComponent,{
  providers: [
    provideRouter(routes)
  ]
})
  .catch((err) => console.error(err));
