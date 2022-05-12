import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EzButtonsModule } from '@jaykain/ez-ui-sdk/ez-buttons';
import { EzElementsModule } from '@jaykain/ez-ui-sdk/ez-elements';

import { EzLeadComponent } from './ez-lead/ez-lead.component';


@NgModule({
  declarations: [
    EzLeadComponent
  ],
  imports: [
    CommonModule,
    EzButtonsModule,
    EzElementsModule
  ],
  exports:[
    EzLeadComponent
  ]
})
export class EzComponentsModule { }
