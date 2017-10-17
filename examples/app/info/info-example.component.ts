import { Component } from '@angular/core';
import {PipLandingInfoBlockItem } from '../pip-webui2-landing';


@Component({
  selector: 'info-example',
  templateUrl: './info-example.component.html',
  styleUrls: ['./info-example.component.scss']
})
export class InfoExampleComponent {

  public img: string = '/assets/u500.png';
  public title: string = 'Общая картина';
  public text: string = 'Теперь есть возможность увидеть полную картину жизни и работы в одном месте.';
  public items: PipLandingInfoBlockItem[] = [];
  constructor() {
    let item: PipLandingInfoBlockItem = new PipLandingInfoBlockItem();
    item.title = this.title;
    item.titleClass = 'pip-orange';
    item.text = this.text;
    item.imgPath = this.img;
    this.items.push(item);
    this.items.push(item);
    this.items.push(item);
    this.items.push(item);
  }
}
