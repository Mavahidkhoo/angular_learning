import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './layout/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
