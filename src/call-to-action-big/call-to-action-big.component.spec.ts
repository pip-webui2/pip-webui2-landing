import { TestBed, async } from '@angular/core/testing';

import { PipCallToActionBigComponent } from './call-to-action-big.component';

describe('PipTestComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PipCallToActionBigComponent
      ],
    }).compileComponents();
  }));

  it('should create the test', async(() => {
    const fixture = TestBed.createComponent(PipCallToActionBigComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it(`should have as text ''`, async(() => {
    const fixture = TestBed.createComponent(PipCallToActionBigComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.text).toEqual('This is a test component');
  }));

  it('should render text in a div tag', async(() => {
    const fixture = TestBed.createComponent(PipCallToActionBigComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain('This is a test component');
  }));
});
