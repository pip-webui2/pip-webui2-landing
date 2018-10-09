import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';

import { PipLandingInfoItemComponent } from './info-item.component';

@NgModule({
  declarations: [
    PipLandingInfoItemComponent
  ],
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    FormsModule, ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    PipLandingInfoItemComponent
  ],
  providers: [],
})
export class PipLandingInfoItemModule { }
