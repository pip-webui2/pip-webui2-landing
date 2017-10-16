import { EventEmitter } from '@angular/core';

export class PipCallToActionBigButton {
    public name: string;
    public click?: any = new EventEmitter();
}