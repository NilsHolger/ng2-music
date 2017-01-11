import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `
     <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <h1 class="header center purple-text darken-1">Angular Router</h1>
      <div class="row center">
           <nav>
        <a class="waves-effect waves-light btn" routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
        <a class="waves-effect waves-light btn" routerLink="/crisis-heroes" routerLinkActive="active">Heroes</a>
        <a class="waves-effect waves-light btn" routerLink="/admin" routerLinkActive="active">Admin</a>
        <a class="waves-effect waves-light btn" routerLink="/login" routerLinkActive="active">Login</a>
        <a class="waves-effect waves-light btn" [routerLink]="[{outlets: { popup: ['compose']}}]">Contact</a>
    </nav>
      </div>
    </div>
    </div>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>

    `
})
export class AppCrisisComponent {
}