import { Component } from '@angular/core';
import { PipCallToActionBigButton } from '../pip-webui2-landing';


@Component({
  selector: 'action-example',
  templateUrl: './action-example.component.html',
  styleUrls: ['./action-example.component.scss']
})
export class ActionExampleComponent {
 
  public list: string[] = [
    'Структурируйте и осмысляйте свои дела',
    'Ведите совместные проекты с коллегами',
    'Организовывайте работу своей команды',
    'Следите за людьми, деятельность которых вам интересна',
    'Делись своими знаниями и наблюдениями с другими'
  ];

  public buttons: PipCallToActionBigButton[] = [];
  constructor() {
    this.buttons.push({
      name: 'ЗАРЕГИСТРИРОВАТЬСЯ БЕСПЛАТНО'
    })
  }
}
