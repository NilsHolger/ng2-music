import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { MusicComponent } from './music/music.component';
import { ImagesComponent } from './images/images.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { HeroesService } from './heroes/heroes.service';

//import { AppCrisisComponent } from './app.crisis.component';
import { AppCrisisModule } from './crisis/app.crisis.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MusicComponent,
    ImagesComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    //AppCrisisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppCrisisModule,
    AppRoutingModule
    
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
