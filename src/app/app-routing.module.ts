import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { RegistationComponent } from './User/registation/registation.component';
import { HomeComponent } from './Pages/home/home.component';
import { BkftComponent } from './Pages/bkft/bkft.component';
import { AppetizersComponent } from './Pages/appetizers/appetizers.component';
import { DrinksComponent } from './Pages/drinks/drinks.component';
import { MenuComponent } from './Pages/menu/menu.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'rigister',component:RegistationComponent
  },
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'apptizer',component:AppetizersComponent
  },
  {
    path:'drinks',component:DrinksComponent
  },
  {
    path:'menu',component:MenuComponent
  },
  {
    path:'bkft',component:BkftComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
