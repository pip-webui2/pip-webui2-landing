import { Component, Input, Output, EventEmitter, Renderer, ElementRef } from '@angular/core';
import { PipCallToActionBigButton } from './shared/call-to-action-big.model';

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
    @Input() buttons: PipCallToActionBigButton[];
    @Input() class: string = null;

    public constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-call-action-big', true);
    }

    public onClick(button: PipCallToActionBigButton): void {
        button.click.emit();
    }
}
