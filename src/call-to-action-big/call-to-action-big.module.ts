import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';

import { PipCallToActionBigComponent } from './call-to-action-big.component';

@NgModule({
  declarations: [
    PipCallToActionBigComponent
  ],
  imports: [
    FlexLayoutModule,
    MatButtonModule
  ],
  exports: [
    PipCallToActionBigComponent
  ],
  providers: [],
})
export class PipCallToActionBigModule { }
