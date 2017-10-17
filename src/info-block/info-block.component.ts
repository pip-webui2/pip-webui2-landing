import { Component, Input, Output, EventEmitter, Renderer, ElementRef } from '@angular/core';

@Component({
    selector: 'pip-landing-info-block',
    templateUrl: './info-block.component.html',
    styleUrls: ['./info-block.component.scss']
})
export class PipLandingInfoBlockComponent {
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
        renderer.setElementClass(elRef.nativeElement, 'pip-landing-info-block', true);
    }
}
