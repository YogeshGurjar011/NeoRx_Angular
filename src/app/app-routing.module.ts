import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAppComponent } from './about-app/about-app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { HomeComponent } from './home/home.component';
import { SciencebehindComponent } from './sciencebehind/sciencebehind.component';
import { UsermanualComponent } from './usermanual/usermanual.component';
import { WhyNeoRxComponent } from './why-neo-rx/why-neo-rx.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
  , {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'sciencebehind',
    component: SciencebehindComponent
  },
  {
    path:'about-app',
    component: AboutAppComponent
  },
  {
    path:'why-neo-rx',
    component: WhyNeoRxComponent
  },
  {
    path: 'helpcenter',
    component: HelpCenterComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
