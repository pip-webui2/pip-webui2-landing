import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';

import { PipLandingCallToActionBigComponent } from './call-to-action-big.component';

@NgModule({
  declarations: [
    PipLandingCallToActionBigComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PipLandingCallToActionBigComponent
  ],
  providers: [],
})
export class PipLandingCallToActionBigModule { }
