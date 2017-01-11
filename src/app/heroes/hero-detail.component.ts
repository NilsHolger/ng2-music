import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common'; 
import { HeroesService } from './heroes.service';
import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
   @Input()
   hero: Hero;
   constructor(private heroesService: HeroesService,
               private route: ActivatedRoute,
               private location: Location){
                   
               }
 ngOnInit(): void {
     this.route.params
                .switchMap((params: Params)=> this.heroesService.getHero(+params['id']))
                .subscribe(hero => this.hero = hero);
 }

 goBack(): void {
     this.location.back();
 }

}