import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';

import { AppBarExampleComponent } from './appbar-example.component';
import { PipTestModule, PipCallToActionModule, PipCallToActionBigModule, PipCallToActionBigComponent } from '../pip-webui2-landing';




@NgModule({
  declarations: [
    AppBarExampleComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    
    PipTestModule, PipCallToActionModule, PipCallToActionBigModule, 

  ],
  exports: [
    AppBarExampleComponent
  ],
  providers: [
  ],
})
export class AppbarExampleModule { }