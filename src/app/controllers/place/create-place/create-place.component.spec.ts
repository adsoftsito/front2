import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePlaceComponent } from './create-place.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PlaceService } from '../../../services/place.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{DebugElement} from '@angular/core';
import { By } from '@angular/platform-browser';
// import {dispatchEvent} from '@angular/platform-browser/testing/browser_util';
import {Router} from '@angular/router';


describe('CreatePlaceComponent', () => {
  let component: CreatePlaceComponent;
  let fixture: ComponentFixture<CreatePlaceComponent>;
  let nameEl :any,
      descriptionEl:any,
      latitudEl:any,
      longitudEl:any,
      narrativEl:any,
      tipoEl:any,
      addButton: DebugElement,
      addForm:FormGroup;
  let router;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePlaceComponent ],
      providers:[PlaceService],
      imports:[BrowserAnimationsModule,RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule,FormsModule,MatFormFieldModule,MaterialFileInputModule,MatInputModule,MatSelectModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //obtener mis elementos html
    // nameEl=fixture.debugElement.query(By.css("#nombre")).nativeElement;
    // descriptionEl=fixture.debugElement.query(By.css("#descripcion")).nativeElement;
    // latitudEl=fixture.debugElement.query(By.css("#latitud")).nativeElement;
    // longitudEl=fixture.debugElement.query(By.css("#longitud")).nativeElement;
    // narrativEl=fixture.debugElement.query(By.css("#narrativa")).nativeElement;
    // tipoEl=fixture.debugElement.query(By.css("#tipo")).nativeElement;
    // addButton=fixture.debugElement.query(By.css(".pull-left")).nativeElement;

    // //obtengo mis formularios
    // addForm=component.placeForm;
    // nameEl=component.placeForm.controls["name"];
    // descriptionEl=component.placeForm.controls["description"];
    // latitudEl=component.placeForm.controls["latitude"];
    // longitudEl=component.placeForm.controls["longitude"];
    // tipoEl=component.placeForm.controls["place_type_id"];
    // narrativEl=component.placeForm.controls["narrative"];

    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // checo que el formuario no sea valido si no esta lleno
  it('form should be invalid when its empty',() =>{
    let itemName =component.placeForm.controls["name"];
    itemName.setValue("La casa de los muñecos");
    let itemDescription =component.placeForm.controls["description"];
    itemDescription.setValue("Un agradable restaurante");
    let itemLongitud =component.placeForm.controls["longitude"];
    itemLongitud.setValue("98.98");
    let itemLatitud =component.placeForm.controls["latitude"];
    itemLatitud.setValue("98.98");
    let itemPlace =component.placeForm.controls["place_type_id"];
    itemPlace.setValue("1");
    expect(component.placeForm.valid).toBeTruthy();
  });

  // xit('form should navigate back to place component when clicked',()=>{
  //   spyOn (router,'navigate');
  //   fixture.whenStable().then(() => {

  //   nameEl.setValue("La casa de los muñecos");
  //   nameEl.dispatchEvent(new Event ("input"));
   

  //   descriptionEl.setValue("Un agradable restaurante");
  //   descriptionEl.dispatchEvent(new Event ("input"));

  //   longitudEl.setValue("98.7");
  //   longitudEl.dispatchEvent(new Event ("input"));

  //   latitudEl.setValue("98.7");
  //  latitudEl.dispatchEvent(new Event ("input"));

  //   tipoEl.setValue("1");
  //   tipoEl.dispatchEvent(new Event ("input"));

  //   narrativEl.setValue("kahdadhahd");
  //   narrativEl.dispatchEvent(new Event ("input"));

  //   addButton.triggerEventHandler('click',null);
  //   fixture.detectChanges();

  //   expect(router.navigate).toHaveBeenCalledWith(['/place'])



  //   });
  // });



});
