import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PipTestModule, PipCallToActionModule, PipCallToActionBigModule, PipCallToActionBigComponent } from './pip-webui2-landing';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Routes, RouterModule} from '@angular/router';
import { ExampleListModule } from './examples-list/examples-list.module';
import { AppBarExampleComponent } from './appbar/appbar-example.component';
import { AppbarExampleModule} from './appbar/appbar-example.module';


const appRoutes: Routes = [
  { path: 'appbar', component: AppBarExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'appbar' }
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
    AppbarExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 