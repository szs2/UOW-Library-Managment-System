import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Displaybook3Component } from './displaybook3.component';

describe('Displaybook3Component', () => {
  let component: Displaybook3Component;
  let fixture: ComponentFixture<Displaybook3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Displaybook3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Displaybook3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
