import { Component, Input, Renderer, ElementRef } from '@angular/core';

@Component({
    selector: 'pip-landing-info-item',
    templateUrl: './info-item.component.html',
    styleUrls: ['./info-item.component.scss']
})
export class PipLandingInfoItemComponent {
    @Input() text: string;
    @Input() imgPath: string;
    @Input() title: string;
    @Input() titleClass = '';
    @Input() textClass = '';
    @Input() imgClass = '';
    @Input() imgPosition = 'top';
    @Input() type = 'img';

    public constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-landing-info-item', true);
    }
}
