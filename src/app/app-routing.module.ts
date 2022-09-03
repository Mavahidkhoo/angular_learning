import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'nav', component: NavComponent },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
