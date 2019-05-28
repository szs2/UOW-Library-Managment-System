import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Displaybook2Component } from './displaybook2.component';

describe('Displaybook2Component', () => {
  let component: Displaybook2Component;
  let fixture: ComponentFixture<Displaybook2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Displaybook2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Displaybook2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
