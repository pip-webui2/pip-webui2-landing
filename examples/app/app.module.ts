import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomBreakPointsProvider } from './custom-breakpoints';
import { MatToolbarModule, MatSelectModule, MatSidenavModule, MatIconModule,MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PipThemesModule } from 'pip-webui2-themes';
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

    RouterModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    
    PipThemesModule,

    PipLandingCallToActionModule,
    PipLandingCallToActionBigModule,

    ExampleListModule,
    ActionExampleModule,
    InfoExampleModule,

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
 