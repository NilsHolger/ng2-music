import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroesService } from './heroes.service';


@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styles: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
        title = 'Tour of Heroes';
        heroes : Hero[];
        selectedHero: Hero;

        ngOnInit(): void {
            this.getHeroes();
        }

        constructor(private heroesService: HeroesService){}

        onSelect(hero: Hero): void {
            this.selectedHero = hero;
        }

        getHeroes(): void {
           this.heroesService.getHeroes().then(heroes => this.heroes = heroes);
        }

}