import { Component, Input, Output, EventEmitter, Renderer, ElementRef } from '@angular/core';

@Component({
    selector: 'pip-landing-info-item',
    templateUrl: './info-item.component.html',
    styleUrls: ['./info-item.component.scss']
})
export class PipLandingInfoItemComponent {
    @Input() text: string;
    @Input() imgPath: string;
    @Input() title: string;
    @Input() titleClass: string = '';
    @Input() imgClass: string = '';
    @Input() imgPosition: string = 'top';

    public constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-landing-info-item', true);
    }
}
