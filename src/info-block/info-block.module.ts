import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { PipLandingInfoBlockComponent } from './info-block.component';
import { PipLandingInfoItemModule } from '../info-item/info-item.module';

@NgModule({
  declarations: [
    PipLandingInfoBlockComponent
  ],
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    FormsModule, ReactiveFormsModule,
    CommonModule,

    PipLandingInfoItemModule
  ],
  exports: [
    PipLandingInfoBlockComponent
  ],
  providers: [],
})
export class PipLandingInfoBlockModule { }
