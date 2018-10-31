import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListRutasComponent } from './table-list-rutas.component';

describe('TableListRutasComponent', () => {
  let component: TableListRutasComponent;
  let fixture: ComponentFixture<TableListRutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableListRutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
