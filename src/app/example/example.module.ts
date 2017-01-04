import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
import { ShowComponent } from './show/show.component';
import { RouterModule } from '@angular/router';
import { ChangeComponent } from './change/change.component';
import { ExampleService } from './shared/example.service';
import { ErrorComponent } from './error/error.component';

export const exampleRoutes = [
    {
        path: '',
        component: ExampleComponent,
        children: [
            {
                path: '',
                component: ShowComponent
            },
            {
                path: 'change',
                component: ChangeComponent
            },
            {
                path: 'error',
                component: ErrorComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(exampleRoutes)
    ],
    providers: [ExampleService],
    declarations: [ExampleComponent, ShowComponent, ChangeComponent, ErrorComponent]
})
export class ExampleModule {
}
