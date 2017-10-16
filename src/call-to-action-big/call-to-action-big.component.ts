import { Component, Input, Output, EventEmitter, Renderer, ElementRef } from '@angular/core';

@Component({
    selector: 'pip-call-to-action-big',
    templateUrl: './call-to-action-big.component.html',
    styleUrls: ['./call-to-action-big.component.scss']
})
export class PipCallToActionBigComponent {
    @Input() list: string[] = [];
    @Input() title: string = null;
    @Input() subtitle: string = null;
    @Input() titleBig: string = null;
    @Input() button: string = 'Button';
    @Input() class: string = null;
    @Output() event = new EventEmitter();

    public constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-call-action-big', true);
    }

    public onClick(): void {
        this.event.emit();
    }
}
