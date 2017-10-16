import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';

import { PipLandingCallToActionComponent } from './call-to-action.component';

@NgModule({
  declarations: [
    PipLandingCallToActionComponent
  ],
  imports: [
    FlexLayoutModule,
    MatButtonModule
  ],
  exports: [
    PipLandingCallToActionComponent
  ],
  providers: [],
})
export class PipLandingCallToActionModule { }
