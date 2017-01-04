import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../shared/example.service';

@Component({
    selector: 'mt-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
    value: string;

    constructor(public exampleService: ExampleService) {
    }

    ngOnInit() {
        this.exampleService.value$
            .subscribe(
                (value: string) => this.value = value
            )
    }
}
