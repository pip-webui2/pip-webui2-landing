# <img src="https://github.com/pip-webui/pip-webui/raw/master/doc/Logo.png" alt="Pip.WebUI Logo" style="max-width:30%"> <br/> Landing page controls

![](https://img.shields.io/badge/license-MIT-blue.svg)

Pip.WebUI.Landing modules contains controls to create engaging landing pages

### Info block

**Using**

```html
<pip-landing-info-block [items]="items"></pip-landing-info-block>
<pip-landing-info-block [items]="items2"></pip-landing-info-block>
<pip-landing-info-block [items]="items3" [type]="'bg'"></pip-landing-info-block>
```

**Examples on the images**

<a href="https://github.com/pip-webui2/pip-webui2-landing/raw/master/doc/images/info.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-landing/raw/master/doc/images/info.png"/>
</a>

<a href="https://github.com/pip-webui2/pip-webui2-landing/raw/master/doc/images/info2.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-landing/raw/master/doc/images/info2.png"/>
</a>

<a href="https://github.com/pip-webui2/pip-webui2-landing/raw/master/doc/images/info3.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-landing/raw/master/doc/images/info3.png"/>
</a>

**Provides dispalying of styled block that contains images and text**

### Call to action bar

**Provides dispalying of styled bar that contains text and action buttons**

**Using**

```html
<pip-landing-call-to-action [title]="'СКОРЕЕ ВСЕГО, ПЕРЕД ВАМИ ТО, ЧТО ВЫ ИСКАЛИ ГОДАМИ'" [text]="'Начните пользоваться системой первыми, раньше чем она появится на рынке'"
    [button]="'ЗАРЕГИСТРИРОВАТЬСЯ БЕСПЛАТНО'">
</pip-landing-call-to-action>
<pip-landing-call-to-action-big [title]="'СКОРЕЕ ВСЕГО, ПЕРЕД ВАМИ ТО, ЧТО ВЫ ИСКАЛИ ГОДАМИ'" [buttons]="buttons"></pip-landing-call-to-action-big >
<pip-landing-call-to-action-big [title]="'СКОРЕЕ ВСЕГО, ПЕРЕД ВАМИ ТО, ЧТО ВЫ ИСКАЛИ ГОДАМИ'" [subtitle]="'единое информационное пространство вашей жизни'"
    [titleBig]="'Pip.life'" [list]="list" [buttons]="buttons"></pip-landing-call-to-action-big >
```

**Examples on the images**

<a href="https://github.com/pip-webui2/pip-webui2-landing/raw/master/doc/images/call-to-action2.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-landing/raw/master/doc/images/call-to-action2.png"/>
</a>

<a href="https://github.com/pip-webui2/pip-webui2-landing/raw/master/doc/images/call-to-action.png" style="display: block; text-align: center;">
    <img style="max-width: 300px" src="https://github.com/pip-webui2/pip-webui2-landing/raw/master/doc/images/call-to-action.png"/>
</a>

## Installation

To install this module using npm:

```bash
npm install pip-webui2-landing --save
```

## <a name="license"></a>License

This module is released under [MIT license](License) and totally free for commercial and non-commercial use.
