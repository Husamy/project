import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoggedGuard } from './logged.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignComponent } from './pages/sign/sign.component';

const routes: Routes = [
  {path:'login',component:LoginComponent,canActivate:[LoggedGuard]},
  {path:'sign',component:SignComponent,canActivate:[LoggedGuard]},
  {path:'dashboard',component:HomeComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
