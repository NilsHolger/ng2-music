import { Component, Input } from '@angular/core';
import { Hero } from './hero';


@Component({
    selector: 'my-hero-detail',
    template: `
      <div *ngIf="hero">
              <span class="card-title">{{hero.name}} details!</span>
              <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name">
        </div>
        </div>
    `
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;

}