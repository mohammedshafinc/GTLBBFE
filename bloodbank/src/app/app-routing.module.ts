import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [

{
 path:'',
 loadChildren:() => import('./login/login.module').then(m => m.LoginModule)
},
{
  path:'registration',
  component:RegistrationComponent
},
{
  path:'home',
  loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
},
{
  path:'**',
  component:NotfoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
