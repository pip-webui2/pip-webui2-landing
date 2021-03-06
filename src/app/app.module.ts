import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatListModule, MatButtonModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import {
  PipAppbarModule,
  PipRightnavModule,
  PipMediaModule,
  PipSidenavModule,
  PipMainLayoutModule,
  PipRootLayoutModule,
  PipSidenavExpanderModule
} from 'pip-webui2-layouts';
import {
  PipBreadcrumbModule,
  PipNavIconModule,
  PipPrimaryActionsModule,
  PipSecondaryActionsModule,
  PipNavModule,
  PipNavHeaderModule,
  PipNavMenuModule
} from 'pip-webui2-nav';

import { PipThemesModule } from 'pip-webui2-themes';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CallToActionExampleModule } from './call-to-action-example/call-to-action-example.module';
import { InfoBlockExampleModule } from './info-block-example/info-block-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule, MatListModule, MatButtonModule,
    TranslateModule.forRoot(),

    PipThemesModule,
    PipAppbarModule,
    PipRightnavModule,
    PipMediaModule,
    PipSidenavModule,
    PipMainLayoutModule,
    PipRootLayoutModule,
    PipSidenavExpanderModule,
    PipBreadcrumbModule,
    PipNavIconModule,
    PipPrimaryActionsModule,
    PipSecondaryActionsModule,
    PipNavModule,
    PipNavHeaderModule,
    PipNavMenuModule,

    AppRoutingModule,
    CallToActionExampleModule,
    InfoBlockExampleModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
