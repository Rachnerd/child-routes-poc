import { Component } from '@angular/core';
import { RootService } from './shared/root.service';

@Component({
    selector: 'mt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';

    constructor(rootService: RootService) {
        rootService.test = '123';
        console.log(rootService); //123
        setTimeout(() => {
            console.log(rootService);//321 caused by AComponent from AModule
        }, 200);
    }
}
