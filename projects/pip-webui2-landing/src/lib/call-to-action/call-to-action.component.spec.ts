import { TestBed, async } from '@angular/core/testing';

import { PipLandingCallToActionComponent } from './call-to-action.component';

describe('PipTestComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PipLandingCallToActionComponent
      ],
    }).compileComponents();
  }));

  it('should create the test', async(() => {
    const fixture = TestBed.createComponent(PipLandingCallToActionComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it(`should have as text ''`, async(() => {
    const fixture = TestBed.createComponent(PipLandingCallToActionComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.text).toEqual('This is a test component');
  }));

  it('should render text in a div tag', async(() => {
    const fixture = TestBed.createComponent(PipLandingCallToActionComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain('This is a landing component');
  }));
});
