import { Component, OnInit, Input } from '@angular/core';
import { BusService } from '../../../services/bus.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn} from '@angular/forms';
@Component({
  selector: 'app-aboutbus',
  templateUrl: './busInfo.component.html'
})

export class BusInfoComponent{ 
  
  form: FormGroup;
  @Input() arrayOfBuses: any;
  myForm: FormGroup;
  arrayOfAllBuses = [undefined];
  
  constructor(private formBuilder: FormBuilder,  
    private _busService: BusService) {}
    
    ngOnInit(){
      this.getBuses();
    }
    
    getBuses(){
      this._busService.getBuses().subscribe(res => { this.arrayOfAllBuses = res; this.createForm() });
    }
    
    
    createForm() {
      // Create a new array with a form control for each order
      const controls = this.arrayOfAllBuses.map(c => new FormControl(false));
      
      //esto se podria hacer mil veces mas eficiente (primera idea... un sort)... 
      for(let mybus of this.arrayOfBuses){
        for(let i = 0 ; i < this.arrayOfAllBuses.length ; i++){
          if(mybus.id == this.arrayOfAllBuses[i].id){
            controls[i].setValue(true);
            break;
          }
        }
      }
    
    
    this.form = this.formBuilder.group({
      arrayOfAllBuses: new FormArray(controls)
    });
  }
  
  
  
}
