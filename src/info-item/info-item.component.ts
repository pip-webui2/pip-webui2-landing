import { Component, Input, Output, EventEmitter, Renderer, ElementRef } from '@angular/core';

@Component({
    selector: 'pip-landing-info-item',
    templateUrl: './info-item.component.html',
    styleUrls: ['./info-item.component.scss']
})
export class PipLandingInfoItemComponent {
    @Input() text: string = 'Cool to action component';
    @Input() title: string = 'Cool title';
    @Input() button: string = 'Button';
    @Input() class: string = null;
    @Output() event = new EventEmitter();

    public constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-landing-info-item', true);
    }

    public onClick(): void {
        this.event.emit();
    }
}
