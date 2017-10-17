import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { PipLandingInfoBlockComponent } from './info-block.component';

@NgModule({
  declarations: [
    PipLandingInfoBlockComponent
  ],
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    FormsModule, ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    PipLandingInfoBlockComponent
  ],
  providers: [],
})
export class PipLandingInfoBlockModule { }
