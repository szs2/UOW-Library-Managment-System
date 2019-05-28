import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Displaybook4Component } from './displaybook4.component';

describe('Displaybook4Component', () => {
  let component: Displaybook4Component;
  let fixture: ComponentFixture<Displaybook4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Displaybook4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Displaybook4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
