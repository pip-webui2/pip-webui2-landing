import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CallToActionExampleComponent } from './call-to-action-example/call-to-action-example.component';
import { InfoBlockExampleComponent } from './info-block-example/info-block-example.component';

const appRoutes: Routes = [
    { path: 'action', component: CallToActionExampleComponent },
    { path: 'info', component: InfoBlockExampleComponent },
    { path: '', pathMatch: 'full', redirectTo: 'action' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
