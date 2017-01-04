import { Injectable, Inject } from '@angular/core';
import { NotifyAnalytics, ANALYTICS } from './analytics.model';

@Injectable()
export class AnalyticsService {

    constructor(@Inject(ANALYTICS) private services: Array<NotifyAnalytics>) {
        services
            .forEach((service: NotifyAnalytics) =>
                service.notifyAnalytics()
                    .subscribe(res => console.log('NotifyAnalytics: ', res))
            );
    }

}
