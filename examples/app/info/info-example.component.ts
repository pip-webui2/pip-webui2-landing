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
  public items2: PipLandingInfoBlockItem[] = [];
  constructor() {
    let item: PipLandingInfoBlockItem = new PipLandingInfoBlockItem();
    item.title = this.title;
    item.titleClass = 'pip-orange';
    item.text = this.text;
    item.imgPath = this.img;
    this.items.push(item);
    let item2: PipLandingInfoBlockItem = new PipLandingInfoBlockItem();
    item2.title = this.title;
    item2.titleClass = 'pip-green';
    item2.text = this.text;
    item2.imgPath = null;
    this.items.push(item2);
    this.items.push(item);


    let item3: PipLandingInfoBlockItem = new PipLandingInfoBlockItem();
    item3.title = "ГИБКАЯ СИСТЕМА НАСТРОЕК ДОСТУПА";
    item3.titleClass = 'pip-orange';
    item3.imgClass = 'img-1';
    item3.text = "К каждой записи, цели, проекту и новости вы можете присвоить свой уровень приватности, а также давать людям возможность управлять ими.";
    item3.imgPath = "/assets/u500.png";
    this.items2.push(item3);
    let item4: PipLandingInfoBlockItem = new PipLandingInfoBlockItem();
    item4.title = "ПОЛНАЯ БЕЗОПАСТНОСТЬ ДАННЫХ";
    item4.titleClass = 'pip-green';
    item4.imgClass = 'img-2';
    item4.text = "Все ваши данные находятся в полной безопасности. Вы сами определяете настройки приватности и решаете, кто и что сможет увидеть.";
    item4.imgPath = "/assets/u502.png";

    let item5: PipLandingInfoBlockItem = new PipLandingInfoBlockItem();
    item5.title = "ЛЕГКО ПОДСТРАИВАЕТСЯ ПОД ВАШ СТИЛЬ";
    item5.titleClass = 'pip-green';
    item5.text = "Вы легко подстроите систему под привычный вам способ ведения дел. Если Вы уже используете какую-то систему, то сможете импортировать";
    item5.imgPath = "/assets/u504.png";


    this.items2.push(item4);
    this.items2.push(item5);


  }
}
