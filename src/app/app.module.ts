import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExampleModule } from './example/example.module';
import { ModuleTestRoutingModule } from './app-routing.module';
import { AnalyticsService } from './analytics/analytics.service';
import { ANALYTICS } from './analytics/analytics.model';
import { ExampleService } from './example/shared/example.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ExampleModule,
        ModuleTestRoutingModule
    ],
    providers: [
        AnalyticsService,
        {
            provide: ANALYTICS,
            useExisting: ExampleService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
