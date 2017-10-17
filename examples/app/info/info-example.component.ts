import { Component } from '@angular/core';


@Component({
  selector: 'info-example',
  templateUrl: './info-example.component.html',
  styleUrls: ['./info-example.component.scss']
})
export class InfoExampleComponent {

  public img: string = '/assets/u500.png';
  public title: string = 'Общая картина';
  public text: string = 'Теперь есть возможность увидеть полную картину жизни и работы в одном месте.';
  constructor() {
   
  }
}
