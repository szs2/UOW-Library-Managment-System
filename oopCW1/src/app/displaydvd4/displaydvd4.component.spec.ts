import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Displaydvd4Component } from './displaydvd4.component';

describe('Displaydvd4Component', () => {
  let component: Displaydvd4Component;
  let fixture: ComponentFixture<Displaydvd4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Displaydvd4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Displaydvd4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
