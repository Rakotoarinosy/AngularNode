import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';

const routes:Routes = [
  {
    path: '',
    loadChildren: () => import("./app.routes").then(module => module.routes)
  }
];
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
