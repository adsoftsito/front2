import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectdateComponent } from './selectdate.component';

describe('SelectdateComponent', () => {
  let component: SelectdateComponent;
  let fixture: ComponentFixture<SelectdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
