import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipSidenavModule } from 'pip-webui2-layouts';
import { PipNavModule } from 'pip-webui2-nav';
import { PipLandingInfoBlockModule } from 'pip-webui2-landing';
import { PipScrollableModule } from 'pip-webui2-layouts';

import { InfoBlockExampleComponent } from './info-block-example.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    PipSidenavModule,
    PipNavModule,
    PipLandingInfoBlockModule,
    PipScrollableModule
  ],
  declarations: [InfoBlockExampleComponent]
})
export class InfoBlockExampleModule { }
