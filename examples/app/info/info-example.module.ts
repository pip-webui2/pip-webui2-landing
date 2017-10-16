import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';

import { InfoExampleComponent } from './info-example.component';
import { PipTestModule, PipLandingInfoItemModule } from '../pip-webui2-landing';




@NgModule({
  declarations: [
    InfoExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    
    PipTestModule,
    PipLandingInfoItemModule

  ],
  exports: [
    InfoExampleComponent
  ],
  providers: [
  ],
})
export class InfoExampleModule { }