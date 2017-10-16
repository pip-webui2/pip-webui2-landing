import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PipCallToActionBigComponent } from './call-to-action-big.component';

@NgModule({
  declarations: [
    PipCallToActionBigComponent
  ],
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PipCallToActionBigComponent
  ],
  providers: [],
})
export class PipCallToActionBigModule { }
