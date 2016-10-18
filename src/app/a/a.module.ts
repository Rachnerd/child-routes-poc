import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AComponent],
  declarations: [AComponent]
})
export class AModule { }
