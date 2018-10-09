import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipSidenavModule } from 'pip-webui2-layouts';
import { PipNavModule } from 'pip-webui2-nav';
import { PipLandingCallToActionModule, PipLandingCallToActionBigModule } from 'pip-webui2-landing';

import { CallToActionExampleComponent } from './call-to-action-example.component';

@NgModule({
  imports: [
    CommonModule,
    PipSidenavModule,
    PipNavModule,
    PipLandingCallToActionModule, PipLandingCallToActionBigModule
  ],
  declarations: [CallToActionExampleComponent]
})
export class CallToActionExampleModule { }
