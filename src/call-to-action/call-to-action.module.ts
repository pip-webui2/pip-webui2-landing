import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PipCallToActionComponent } from './call-to-action.component';

@NgModule({
  declarations: [
    PipCallToActionComponent
  ],
  imports: [
    FlexLayoutModule
  ],
  exports: [
    PipCallToActionComponent
  ],
  providers: [],
})
export class PipCallToActionModule { }
