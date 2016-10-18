import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AModule } from './a/a.module';
import { RootService } from './shared/root.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AModule
    ],
    providers: [RootService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
