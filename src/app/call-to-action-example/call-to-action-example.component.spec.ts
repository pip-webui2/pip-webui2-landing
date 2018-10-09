import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionExampleComponent } from './call-to-action-example.component';

describe('CallToActionExampleComponent', () => {
  let component: CallToActionExampleComponent;
  let fixture: ComponentFixture<CallToActionExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallToActionExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToActionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
