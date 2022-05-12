import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EzSolidButtonComponent } from './ez-solid-button/ez-solid-button.component';
import { EzOutlineButtonComponent } from './ez-outline-button/ez-outline-button.component';



@NgModule({
  declarations: [
    EzSolidButtonComponent,
    EzOutlineButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EzSolidButtonComponent,
    EzOutlineButtonComponent
  ]
})
export class EzButtonsModule { }
