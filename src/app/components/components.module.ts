import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementComponent } from './increment/increment.component';



@NgModule({
  declarations: [
    IncrementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IncrementComponent
  ]
})
export class ComponentsModule { }
