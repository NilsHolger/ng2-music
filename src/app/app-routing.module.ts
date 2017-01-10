import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { ImagesComponent } from './images/images.component';
import { MusicComponent } from './music/music.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
    path: 'home',
    component: BodyComponent
    },
    {
    path: 'heroes',
    component: HeroesComponent
    },
    {
      path: 'images',
      component: ImagesComponent
    },
    {
      path: 'music',
      component: MusicComponent
    }
  ];

  @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [ RouterModule]
  })
  export class AppRoutingModule {}