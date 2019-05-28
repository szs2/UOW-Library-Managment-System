import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Displaybook1Component } from './displaybook1.component';

describe('Displaybook1Component', () => {
  let component: Displaybook1Component;
  let fixture: ComponentFixture<Displaybook1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Displaybook1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Displaybook1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
