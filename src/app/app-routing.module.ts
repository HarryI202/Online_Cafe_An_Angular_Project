import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { RegistationComponent } from './User/registation/registation.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'rigister',component:RegistationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
