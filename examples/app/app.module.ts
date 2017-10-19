import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PipLandingCallToActionModule, PipLandingCallToActionBigModule, PipLandingCallToActionBigComponent } from './pip-webui2-landing';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Routes, RouterModule} from '@angular/router';
import { ExampleListModule } from './examples-list/examples-list.module';
import { ActionExampleComponent } from './action/action-example.component';
import { ActionExampleModule} from './action/action-example.module';

import { InfoExampleComponent } from './info/info-example.component';
import { InfoExampleModule} from './info/info-example.module';


const appRoutes: Routes = [
  { path: 'action', component: ActionExampleComponent },
  { path: 'info', component: InfoExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'action' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    PipLandingCallToActionModule,
    PipLandingCallToActionBigModule,

    ExampleListModule,
    ActionExampleModule,
    InfoExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 