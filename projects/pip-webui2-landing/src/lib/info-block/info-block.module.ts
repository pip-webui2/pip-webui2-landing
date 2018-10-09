import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';

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
