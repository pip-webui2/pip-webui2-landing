import { Component, Input, Output, EventEmitter, Renderer, ElementRef } from '@angular/core';

import { PipLandingInfoBlockItem } from './shared/info-block.model';

@Component({
    selector: 'pip-landing-info-block',
    templateUrl: './info-block.component.html',
    styleUrls: ['./info-block.component.scss']
})
export class PipLandingInfoBlockComponent {
    @Input()  items: PipLandingInfoBlockItem[] = [];

    public constructor(
        private renderer: Renderer,
        private elRef: ElementRef
    ) {
        renderer.setElementClass(elRef.nativeElement, 'pip-landing-info-block', true);
    }
}
