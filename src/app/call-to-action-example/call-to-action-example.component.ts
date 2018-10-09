import { Component, OnInit } from '@angular/core';
import { PipSidenavService } from 'pip-webui2-layouts';
import { PipLandingCallToActionBigButton } from 'pip-webui2-landing';
import { PipNavService } from 'pip-webui2-nav';

@Component({
  selector: 'app-call-to-action-example',
  templateUrl: './call-to-action-example.component.html',
  styleUrls: ['./call-to-action-example.component.scss']
})
export class CallToActionExampleComponent implements OnInit {

  public list: string[] = [
    'Структурируйте и осмысляйте свои дела',
    'Ведите совместные проекты с коллегами',
    'Организовывайте работу своей команды',
    'Следите за людьми, деятельность которых вам интересна',
    'Делись своими знаниями и наблюдениями с другими'
  ];

  public buttons: PipLandingCallToActionBigButton[] = [];

  constructor(
    private navService: PipNavService,
    private sidenav: PipSidenavService,
  ) {
    this.sidenav.active = true;
    this.navService.showTitle('Call to action');
    this.buttons.push({
      name: 'ЗАРЕГИСТРИРОВАТЬСЯ БЕСПЛАТНО'
    });
  }

  ngOnInit() {
  }

}
