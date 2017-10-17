import { TestBed, async } from '@angular/core/testing';

import { PipLandingInfoBlockComponent } from './info-block.component';

describe('PipInfoBlockComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PipLandingInfoBlockComponent
      ],
    }).compileComponents();
  }));

  it('should create the test', async(() => {
    const fixture = TestBed.createComponent(PipLandingInfoBlockComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it(`should have as text ''`, async(() => {
    const fixture = TestBed.createComponent(PipLandingInfoBlockComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.text).toEqual('This is a info item component');
  }));

  it('should render text in a div tag', async(() => {
    const fixture = TestBed.createComponent(PipLandingInfoBlockComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain('This is a test component');
  }));
});
