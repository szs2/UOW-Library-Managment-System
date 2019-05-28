import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovereaderComponent } from './removereader.component';

describe('RemovereaderComponent', () => {
  let component: RemovereaderComponent;
  let fixture: ComponentFixture<RemovereaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovereaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovereaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
