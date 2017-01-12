import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Crisis, AppCrisisService } from './app.crisis.service';

@Component({
    selector: 'crisis-list-app',
    templateUrl: './app.crisis.list.component.html'
})
export class AppCrisisListComponent implements OnInit {
    crises: Observable<Crisis[]>;
    selectedId: number;

    constructor(private crisisService: AppCrisisService, 
                private activatedRoute: ActivatedRoute,
                private router: Router, private location: Location){}

    isSelected(crisis: Crisis){
        return crisis.id === this.selectedId;
    }

    ngOnInit(){
        this.crises = this.activatedRoute.params.switchMap((params: Params) => {
            this.selectedId = +params['id'];
            return this.crisisService.getCrises();
        });
    }

    onSelect(crisis: Crisis){
        this.selectedId = crisis.id;
        //navigate with relative link
        //this.router.navigate([crisis.id], { relativeTo: this.activatedRoute});
    }
     goBack(): void {
     this.location.back();
 }

}