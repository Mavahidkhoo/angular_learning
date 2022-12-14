import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'about', 
  loadChildren: () => import('./layout/about/about.module').then(m => m.AboutModule)
},
{ path: 'login', 
  loadChildren: () => import('./layout/login/login.module').then(m => m.LoginModule)
},
{ path: 'register', 
  loadChildren: () => import('./layout/register/register.module').then(m => m.RegisterModule)
},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
