import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../shared/example.service';

@Component({
    selector: 'mt-change',
    templateUrl: './change.component.html',
    styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {
    value: string;
    constructor(private exampleService: ExampleService) {
    }

    ngOnInit() {
        this.value = this.exampleService.getValue();
    }
    change(value: string) {
        // validate change and send errors to example service (for adobe)
        this.exampleService.setValue(value);
    }
}
