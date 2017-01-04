import { Observable } from 'rxjs';
import { OpaqueToken } from '@angular/core';

export interface NotifyAnalytics {
    notifyAnalytics(): Observable<Analytics>;
}

export const ANALYTICS: OpaqueToken = new OpaqueToken('analytics');

export class Analytics {
    constructor(public title, public content?) {

    }
}