import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistationComponent } from './User/registation/registation.component';
import { LoginComponent } from './User/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { DrinksComponent } from './Pages/drinks/drinks.component';
import { BkftComponent } from './Pages/bkft/bkft.component';
import { AppetizersComponent } from './Pages/appetizers/appetizers.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistationComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    DrinksComponent,
    BkftComponent,
    AppetizersComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
