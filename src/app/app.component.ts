import { Component } from '@angular/core';
import { AnalyticsService } from './analytics/analytics.service';

@Component({
    selector: 'mt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';

    constructor(analyticsService: AnalyticsService) { // Here to activate the service

    }
}
