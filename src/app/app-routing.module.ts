import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graphic1Component } from './pages/graphic1/graphic1.component';
import { Page404Component } from './pages/page404/page404.component';
import { ProgressComponent } from './pages/progress/progress.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'progress', component: ProgressComponent},
  {path: 'graphic1', component: Graphic1Component},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, 
  // el pathmatch full si esta la ruta vacia lo redirecciona
  {path: '**', component: Page404Component}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // forRoot son las rutas principales
  exports: [RouterModule]
})
export class AppRoutingModule { }
