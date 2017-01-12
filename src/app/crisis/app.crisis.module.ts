import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppCrisisComponent } from '../app.crisis.component';
import { AppCrisisListComponent } from './app.crisis.list.component';
import { AppHeroesListComponent } from './app.heroes.list.component';

import { AppCrisisService } from './app.crisis.service';

const appCrisisRoutes: Routes = [
    {path: 'crisis', component: AppCrisisComponent},
    {path: 'crisis-center', component: AppCrisisListComponent},
    {path: 'crisis-heroes', component: AppHeroesListComponent}
]; 

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appCrisisRoutes)
    ],
    declarations: [
        AppCrisisComponent,
        AppCrisisListComponent,
        AppHeroesListComponent
    ],
    providers: [AppCrisisService],
    bootstrap: [AppCrisisComponent]
})
export class AppCrisisModule {}