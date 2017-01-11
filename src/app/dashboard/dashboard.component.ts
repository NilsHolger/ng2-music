import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroesService } from '../heroes/heroes.service';


@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

    heroes: Hero[] = [];

    constructor(private heroesService: HeroesService){}

    ngOnInit(): void {
        this.heroesService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

}