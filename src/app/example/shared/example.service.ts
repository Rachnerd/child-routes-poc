import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { NotifyAnalytics, Analytics } from '../../analytics/analytics.model';

@Injectable()
export class ExampleService implements NotifyAnalytics {
    value$: Observable<string>;
    error$: Observable<string>;
    private valueSubject: BehaviorSubject<string> = new BehaviorSubject<string>('Change me!');
    private errorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('Change me!');

    constructor() {
        this.value$ = this.valueSubject.asObservable();
        this.error$ = this.errorSubject.asObservable();
    }

    setValue(value: string): void {
        this.valueSubject.next(value);
    }

    getValue(): string {
        return this.valueSubject.getValue();
    }

    setError(value: string): void {
        this.errorSubject.next(value);
    }

    getError(): string {
        return this.errorSubject.getValue();
    }

    notifyAnalytics(): Observable<Analytics> {
        return this.value$
            .map(value => new Analytics('Value changed', value))
            .merge(
                this.error$
                    .map(error => new Analytics('Value error', error))
            )
            .skip(2); // Skipping both initial values of the behavior subjects
    }
}
