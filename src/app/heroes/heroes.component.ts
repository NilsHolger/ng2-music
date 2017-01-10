import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

const HEROES: Hero[] = [
    {id: 1, name: 'Angular 1'},
    {id: 2, name: 'Angular 2'},
    {id: 3, name: 'Angular CLI'},
    {id: 4, name: 'Ionic'},
    {id: 5, name: 'Material Design'},
    {id: 6, name: 'NodeJS'},
    {id: 7, name: 'V8'},
    {id: 8, name: 'ChromeOS'},
    {id: 9, name: 'Linux'},
    {id: 10, name: 'Firebase'},
    {id: 11, name: 'Google Cloud'}
];

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styles: ['./heroes.component.css']
})
export class HeroesComponent {
        title = 'Tour of Heroes';
        heroes = HEROES;
        hero: Hero = {
            id: 1,
            name:'Angular'
        };
}