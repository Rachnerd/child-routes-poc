import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../shared/example.service';

@Component({
    selector: 'mt-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
    error: string;

    constructor(private exampleService: ExampleService) {
    }

    ngOnInit() {
        this.error = this.exampleService.getError();
    }

    clean() {
        this.exampleService.setError(undefined);
    }
}
