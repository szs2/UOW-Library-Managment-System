import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Displaydvd1Component } from './displaydvd1.component';

describe('Displaydvd1Component', () => {
  let component: Displaydvd1Component;
  let fixture: ComponentFixture<Displaydvd1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Displaydvd1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Displaydvd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
