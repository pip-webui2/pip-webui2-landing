// tslint:disable:max-line-length
import { Component, OnInit } from '@angular/core';
import { PipSidenavService } from 'pip-webui2-layouts';
import { PipLandingInfoBlockItem } from 'pip-webui2-landing';
import { PipNavService } from 'pip-webui2-nav';

@Component({
  selector: 'app-info-block-example',
  templateUrl: './info-block-example.component.html',
  styleUrls: ['./info-block-example.component.scss']
})
export class InfoBlockExampleComponent implements OnInit {

  public img = '/assets/u500.png';
  public title = 'Общая картина';
  public text = 'Теперь есть возможность увидеть полную картину жизни и работы в одном месте.';
  public items: PipLandingInfoBlockItem[] = [];
  public items2: PipLandingInfoBlockItem[] = [];
  public items3: PipLandingInfoBlockItem[] = [];

  constructor(
    private navService: PipNavService,
    private sidenav: PipSidenavService,
  ) {
    this.sidenav.active = true;
    this.navService.showTitle('Info block');

    const item: PipLandingInfoBlockItem = new PipLandingInfoBlockItem();
    item.title = this.title;
    item.titleClass = 'pip-orange';
    item.text = this.text;
    item.imgPath = this.img;
    this.items.push(item);
    const item2: PipLandingInfoBlockItem = new PipLandingInfoBlockItem();
    item2.title = this.title;
    item2.titleClass = 'pip-green';
    item2.text = this.text;
    item2.imgPath = null;
    this.items.push(item2);
    this.items.push(item);


    const item3: PipLandingInfoBlockItem = new PipLandingInfoBlockItem();
    item3.title = 'ГИБКАЯ СИСТЕМА НАСТРОЕК ДОСТУПА';
    item3.titleClass = 'pip-orange';
    item3.imgClass = 'img-1';
    item3.text = 'К каждой записи, цели, проекту и новости вы можете присвоить свой уровень приватности, а также давать людям возможность управлять ими.';
    item3.imgPath = '/assets/u500.png';
    this.items2.push(item3);
    const item4: PipLandingInfoBlockItem = new PipLandingInfoBlockItem();
    item4.title = 'ПОЛНАЯ БЕЗОПАСТНОСТЬ ДАННЫХ';
    item4.titleClass = 'pip-green';
    item4.imgClass = 'img-2';
    item4.text = 'Все ваши данные находятся в полной безопасности. Вы сами определяете настройки приватности и решаете, кто и что сможет увидеть.';
    item4.imgPath = '/assets/u502.png';

    const item5: PipLandingInfoBlockItem = new PipLandingInfoBlockItem();
    item5.title = 'ЛЕГКО ПОДСТРАИВАЕТСЯ ПОД ВАШ СТИЛЬ';
    item5.titleClass = 'pip-green';
    item5.text = 'Вы легко подстроите систему под привычный вам способ ведения дел. Если Вы уже используете какую-то систему, то сможете импортировать';
    item5.imgPath = '/assets/u504.png';


    this.items2.push(item4);
    this.items2.push(item5);


    const item6: PipLandingInfoBlockItem = new PipLandingInfoBlockItem();
    item6.title = 'ГИБКАЯ СИСТЕМА НАСТРОЕК ДОСТУПА';
    item6.titleClass = 'pip-orange';
    item6.imgClass = 'img-5';
    item6.text = 'К каждой записи, цели, проекту и новости вы можете присвоить свой уровень приватности, а также давать людям возможность управлять ими.';

    this.items3.push(item6);
    const item7: PipLandingInfoBlockItem = new PipLandingInfoBlockItem();
    item7.title = 'ПОЛНАЯ БЕЗОПАСТНОСТЬ ДАННЫХ';
    item7.titleClass = 'pip-green';
    item7.imgClass = 'img-5';
    item7.text = 'Все ваши данные находятся в полной безопасности. Вы сами определяете настройки приватности и решаете, кто и что сможет увидеть.';


    const item8: PipLandingInfoBlockItem = new PipLandingInfoBlockItem();
    item8.title = 'ЛЕГКО ПОДСТРАИВАЕТСЯ ПОД ВАШ СТИЛЬ';
    item8.titleClass = 'pip-green';
    item8.imgClass = 'img-5';
    item8.text = 'Вы легко подстроите систему под привычный вам способ ведения дел. Если Вы уже используете какую-то систему, то сможете импортировать';


    this.items3.push(item7);
    this.items3.push(item8);
  }

  ngOnInit() {
  }

}
