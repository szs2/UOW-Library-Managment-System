import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Displaydvd2Component } from './displaydvd2.component';

describe('Displaydvd2Component', () => {
  let component: Displaydvd2Component;
  let fixture: ComponentFixture<Displaydvd2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Displaydvd2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Displaydvd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
