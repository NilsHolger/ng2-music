import { Injectable } from '@angular/core';

export class Crisis {
    constructor(public id: number, public name: string){}
}

const CRISIS = [
    new Crisis(1, 'fake ms agents are sabotaging angular, node, linux and open source repositories code on github.'),
    new Crisis(2, 'undercover ms brainwashed fanatics are sabotaging angular answers on stack overflow.'),
    new Crisis(3, 'undercover ms disciples writing books on angular 2 with errors, diverting to other technologies.'),
    new Crisis(4, 'evil closed source shop ms is trying to ruin the reputation of open source, angular and google.'),
    new Crisis(5, 'ms employees stealing angular code and node_modules selling them. copyright infringement.')
];

const crisesPromise = Promise.resolve(CRISIS);

@Injectable()
export class AppCrisisService {
    
    static nextCrisisId = 100;

    getCrises() { return crisesPromise;}

    getCrisis(id: number | string ){
        return crisesPromise.then(crises => crises.find(crisis => crisis.id === +id));
    }

    addCrisis(name: string){
        name = name.trim();
        if (name) {
            let crisis = new Crisis(AppCrisisService.nextCrisisId++, name);
            crisesPromise.then(crises => crises.push(crisis));
        }
    }

}



