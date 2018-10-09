import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBlockExampleComponent } from './info-block-example.component';

describe('InfoBlockExampleComponent', () => {
  let component: InfoBlockExampleComponent;
  let fixture: ComponentFixture<InfoBlockExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBlockExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBlockExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
