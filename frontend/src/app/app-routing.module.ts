import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/info/about/about.component';
import { FaqComponent } from './components/info/faq/faq.component';
import { GetStartedComponent } from './components/info/get-started/get-started.component';
import { HomePageComponent } from './components/landing-page/home-page/home-page.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'about', component:AboutComponent},
  {path:'faq', component:FaqComponent},
  {path:'getstarted', component:GetStartedComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
