import { Component } from '@angular/core';
import { PipCallToActionBigButton } from './pip-webui2-landing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public list: any[] = [
    {
      name: 'Call to action',
      id: 'action', 
      route: 'action'
    },
    {
      name: 'Info block',
      id: 'info', 
      route: 'info'
    }
  ];

  public listIndex: number = 0;

  public onListItemIndexChanged(index: number) {
    this.listIndex - index;

  }
}
