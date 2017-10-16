import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';

import { PipLandingInfoItemComponent } from './info-item.component';

@NgModule({
  declarations: [
    PipLandingInfoItemComponent
  ],
  imports: [
    FlexLayoutModule,
    MatButtonModule
  ],
  exports: [
    PipLandingInfoItemComponent
  ],
  providers: [],
})
export class PipLandingInfoItemModule { }
