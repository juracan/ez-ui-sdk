import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EzH1Component } from './ez-h1/ez-h1.component';
import { EzH2Component } from './ez-h2/ez-h2.component';



@NgModule({
  declarations: [
    EzH1Component,
    EzH2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EzH1Component,
    EzH2Component
  ]
})
export class EzElementsModule { }
