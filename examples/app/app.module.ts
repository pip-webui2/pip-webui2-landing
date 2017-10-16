import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PipTestModule, PipCallToActionModule } from './pip-webui2-landing';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PipTestModule,
    PipCallToActionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 