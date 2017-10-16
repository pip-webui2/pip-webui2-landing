import { Component, Input, Output, EventEmitter, Renderer, ElementRef } from '@angular/core';

@Component({
    selector: 'pip-call-to-action',
    templateUrl: './call-to-action.component.html',
    styleUrls: ['./call-to-action.component.scss']
})
export class PipCallToActionComponent {
    @Input() text: string = 'Cool to action component';
    @Input() title: string = 'Cool title';
    @Input() button: string = 'Button';
    @Input() class: string = null;
    @Output() event = new EventEmitter();

    public constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-call-action', true);
    }

    public onClick(): void {
        this.event.emit();
    }
}
