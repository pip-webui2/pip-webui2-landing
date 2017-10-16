import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';

import { PipCallToActionComponent } from './call-to-action.component';

@NgModule({
  declarations: [
    PipCallToActionComponent
  ],
  imports: [
    FlexLayoutModule,
    MatButtonModule
  ],
  exports: [
    PipCallToActionComponent
  ],
  providers: [],
})
export class PipCallToActionModule { }
