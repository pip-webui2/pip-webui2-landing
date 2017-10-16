import { Component, Input, Output, EventEmitter, Renderer, ElementRef } from '@angular/core';

@Component({
    selector: 'pip-landing-call-to-action',
    templateUrl: './call-to-action.component.html',
    styleUrls: ['./call-to-action.component.scss']
})
export class PipLandingCallToActionComponent {
    @Input() text: string = 'Cool to action component';
    @Input() title: string = 'Cool title';
    @Input() button: string = 'Button';
    @Input() class: string = null;
    @Output() event = new EventEmitter();

    public constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-landing-call-action', true);
    }

    public onClick(): void {
        this.event.emit();
    }
}
