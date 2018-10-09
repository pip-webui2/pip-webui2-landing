import { Component, Input, Renderer, ElementRef } from '@angular/core';
import { PipLandingCallToActionBigButton } from './shared/call-to-action-big.model';

@Component({
    selector: 'pip-landing-call-to-action-big',
    templateUrl: './call-to-action-big.component.html',
    styleUrls: ['./call-to-action-big.component.scss']
})
export class PipLandingCallToActionBigComponent {
    @Input() list: string[] = [];
    @Input() title: string = null;
    @Input() subtitle: string = null;
    @Input() titleBig: string = null;
    @Input() buttons: PipLandingCallToActionBigButton[];
    @Input() class: string = null;

    public constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-call-action-big', true);
    }

    public onClick(button: PipLandingCallToActionBigButton): void {
        button.click.emit();
    }
}
