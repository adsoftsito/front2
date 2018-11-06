import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateinformationComponent } from './dateinformation.component';

describe('DateinformationComponent', () => {
  let component: DateinformationComponent;
  let fixture: ComponentFixture<DateinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
