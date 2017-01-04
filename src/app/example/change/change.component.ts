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
        if(value.length < 3) {
            this.exampleService.setError('New entered value too short ' + value.length);
        }else {
            this.exampleService.setValue(value);
        }
    }
}
