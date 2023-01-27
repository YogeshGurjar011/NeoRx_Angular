import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { WhyNeoRxComponent } from './why-neo-rx/why-neo-rx.component';
import { UsermanualComponent } from './usermanual/usermanual.component';
import { SciencebehindComponent } from './sciencebehind/sciencebehind.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { CarouselModule } from "ngx-owl-carousel-o"
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AboutAppComponent,
    WhyNeoRxComponent,
    UsermanualComponent,
    SciencebehindComponent,
    HelpCenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
