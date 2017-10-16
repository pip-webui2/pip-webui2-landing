import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pip-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class PipCallToActionComponent {
    @Input() text: string = 'Cool to action component';
    @Output() event = new EventEmitter();

    public constructor() {}

    public onClick(): void {
        this.event.emit(this.text);
    }
}
