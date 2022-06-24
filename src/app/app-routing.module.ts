import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';

import { Page404Component } from './page404/page404.component';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  { path: '**', component: Page404Component },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

// path '/dashboard' => PagesRoutingModule
// path '/login' => AuthsRoutingModule -> login
// path '/register' => AuthsRoutingModule -> register

// el pathmatch full si esta la ruta vacia lo redirecciona
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  // forRoot son las rutas principales
  exports: [RouterModule]
})
export class AppRoutingModule { }
