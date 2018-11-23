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
  arrayOfAllBuses= [];
  myForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,  
    private _busService: BusService,
    private activeModal: NgbActiveModal) {}

    ngOnInit(){
      this.getBuses();

    }

    getBuses(){
        this._busService.getBuses().subscribe(res => { this.arrayOfAllBuses = res;});
    }

    
    private createForm() {
       // Create a new array with a form control for each order
      const controls = this.arrayOfAllBuses.map(c => new FormControl(false));
      controls[1].setValue(true); // Set the first checkbox to true (checked)
      
      this.form = this.formBuilder.group({
        arrayOfAllBuses: new FormArray(controls)
      });
    }
    

    
  }
  