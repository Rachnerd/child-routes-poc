import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
import { ShowComponent } from './show/show.component';
import { RouterModule } from '@angular/router';
import { ChangeComponent } from './change/change.component';
import { ExampleService } from './shared/example.service';

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
    declarations: [ExampleComponent, ShowComponent, ChangeComponent]
})
export class ExampleModule {
}
