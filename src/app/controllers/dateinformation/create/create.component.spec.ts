import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CreateComponent } from './create.component';
import { MatDatepickerModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { DateinformationService } from '../../../services/dateinformation.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MatNativeDateModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComponent ],
      providers:[DateinformationService],
      imports:[ MatInputModule,MatNativeDateModule,RouterTestingModule,BrowserAnimationsModule,HttpClientTestingModule,MatRadioModule,ReactiveFormsModule,FormsModule,MatFormFieldModule,MatDatepickerModule,MatSelectModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form to add a new date should be invalid when there is a value missing',() =>{
    let itemStartDate =component.angForm.controls["start_date"];
    itemStartDate.setValue("20/10/2018");
    let itemEndDate =component.angForm.controls["end_date"];
    itemEndDate.setValue("22/12/2018");
   
    
    expect(component.angForm.valid).toBeFalsy();
  });

  it('form to add a new time interval should be invalid when its empty',() =>{
    let itemStartTime =component.myForm.controls["start_time"];
    itemStartTime.setValue("8:00");
    let itemEndTime =component.myForm.controls["end_time"];
    itemEndTime.setValue("18:00");
    let itemFrequency =component.myForm.controls["frequency"];
    itemFrequency.setValue("30");
   
    
    expect(component.myForm.valid).toBeTruthy();
  });
});
