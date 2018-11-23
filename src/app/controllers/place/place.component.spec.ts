import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaceService } from '../../services/place.service';
import { PlaceComponent } from './place.component';
import { RouterTestingModule } from '@angular/router/testing';
import {  HttpClientTestingModule} from '@angular/common/http/testing';
describe('PlaceComponent', () => {
  let component: PlaceComponent;
  let fixture: ComponentFixture<PlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule],
      providers:
      [PlaceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
