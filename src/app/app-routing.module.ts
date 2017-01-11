import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { ImagesComponent } from './images/images.component';
import { MusicComponent } from './music/music.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent} from './heroes/hero-detail.component';

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
    path: 'dashboard',
    component: DashboardComponent

    },
    {
    path: 'heroes',
    component: HeroesComponent
    },
    {
    path: 'detail/:id',
    component: HeroDetailComponent
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