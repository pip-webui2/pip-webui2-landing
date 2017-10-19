import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';

import { ActionExampleComponent } from './action-example.component';
import { PipLandingCallToActionModule, PipLandingCallToActionBigModule, PipLandingCallToActionBigComponent } from '../pip-webui2-landing';




@NgModule({
  declarations: [
    ActionExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    
    PipLandingCallToActionModule,
    PipLandingCallToActionBigModule, 
  ],
  exports: [
    ActionExampleComponent
  ],
  providers: [
  ],
})
export class ActionExampleModule { }