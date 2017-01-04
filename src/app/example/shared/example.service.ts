import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class ExampleService {
    value$: Observable<string>;
    private valueSubject: BehaviorSubject<string> = new BehaviorSubject<string>('Change me!');
    constructor() {
        this.value$ = this.valueSubject.asObservable();
    }

    setValue(value: string): void {
        // Notify adobe
        this.valueSubject.next(value);
    }

    getValue(): string {
        return this.valueSubject.getValue();
    }
}
