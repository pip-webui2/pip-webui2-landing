import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PipTestModule, PipCallToActionModule, PipCallToActionBigModule, PipCallToActionBigComponent } from './pip-webui2-landing';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Routes, RouterModule} from '@angular/router';
import { ExampleListModule } from './examples-list/examples-list.module';
import { ActionExampleComponent } from './action/action-example.component';
import { ActionExampleModule} from './action/action-example.module';


const appRoutes: Routes = [
  { path: 'action', component: ActionExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'action' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    PipTestModule,
    PipCallToActionModule,
    PipCallToActionBigModule,

    ExampleListModule,
    ActionExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 