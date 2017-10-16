import { TestBed, async } from '@angular/core/testing';

import { PipLandingInfoItemComponent } from './info-item.component';

describe('PipInfoItemComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PipLandingInfoItemComponent
      ],
    }).compileComponents();
  }));

  it('should create the test', async(() => {
    const fixture = TestBed.createComponent(PipLandingInfoItemComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it(`should have as text ''`, async(() => {
    const fixture = TestBed.createComponent(PipLandingInfoItemComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.text).toEqual('This is a info item component');
  }));

  it('should render text in a div tag', async(() => {
    const fixture = TestBed.createComponent(PipLandingInfoItemComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain('This is a test component');
  }));
});
