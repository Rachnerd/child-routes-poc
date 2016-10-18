import { Component, OnInit } from '@angular/core';
import { RootService } from '../shared/root.service';

@Component({
    selector: 'mt-a',
    templateUrl: './a.component.html',
    styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

    constructor(rootService: RootService) {
        rootService.test = '321';
    }

    ngOnInit() {
    }

}
