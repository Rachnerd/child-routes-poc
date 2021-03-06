import { Component, OnInit } from '@angular/core';
import { ExampleService } from './shared/example.service';
import { Router } from '@angular/router';

@Component({
    selector: 'mt-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

    constructor(private exampleService: ExampleService, private router: Router) {
    }

    ngOnInit() {
        this.exampleService.value$
            .subscribe(
                () => this.router.navigate([''])
            );
        this.exampleService.error$
            .filter(error => error === undefined)
            .subscribe(
                () => this.router.navigate([''])
            );
        this.exampleService.error$
            .filter(error => error !== undefined)
            .subscribe(
                () => this.router.navigate(['', 'error'])
            );
    }

}
