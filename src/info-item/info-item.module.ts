import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

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
