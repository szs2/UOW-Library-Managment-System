import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayissueComponent } from './displayissue.component';

describe('DisplayissueComponent', () => {
  let component: DisplayissueComponent;
  let fixture: ComponentFixture<DisplayissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
