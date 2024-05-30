import { CampComponent } from './camp/camp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DemoComponent } from './demo/demo.component';
import { RequestformComponent } from './registration/requestform/requestform.component';
import { CampshowComponent } from './camp/campshow/campshow.component';

const routes: Routes = [

{
 path:'login',
 loadChildren:() => import('./login/login.module').then(m => m.LoginModule)
},
{
  path:'registration',
  component:RegistrationComponent
},
{
  path:'authform',
  component:RequestformComponent
},
{
  path:'',
  loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
},
{
  path:'demo',
  component:DemoComponent
},
{
  path:'campregistration',
  component:CampComponent
},
{
  path:'showcamp',
  component:CampshowComponent
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
