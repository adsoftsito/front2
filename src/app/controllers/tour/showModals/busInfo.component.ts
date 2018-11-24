import { Component, Output, EventEmitter, Input} from '@angular/core';
import { BusService } from '../../../services/bus.service';
import { TourService } from '../../../services/tour.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn} from '@angular/forms';
declare const $: any;
@Component({
  selector: 'app-aboutbus',
  templateUrl: './busInfo.component.html'
})

export class BusInfoComponent{ 
  
  form: FormGroup;
  @Input() arrayOfBuses: any;
  @Input() idOfTour: any;
  myForm: FormGroup;
  arrayOfAllBuses = [undefined];
  controls;
  mybuses;
  
  constructor(private formBuilder: FormBuilder,  
    private _busService: BusService,
    public activeModal: NgbActiveModal,
    private _tourService: TourService) {}
    
    ngOnInit(){
      this.getBuses();
    }
    
    getBuses(){
      this._busService.getBuses().subscribe(res => { this.arrayOfAllBuses = res; this.createForm() });
    }
    
    showNotification(from, align){
      $.notify({
        message: "Tour editado."
      },{
        timer: 1000,
        placement: {
          from: from,
          align: align
        },
        template: `<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">
        <button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>
        <span data-notify="icon"></span>
        <span data-notify="message">{2}</span>
        <div class="progress" data-notify="progressbar">
        <div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
        </div>
        </div>`,
        onShow: ()=>{
          this.closeModal();
        },
        onClose: ()=>{
          //window.location.reload();
        }
      });
    }
    
    closeModal() {
      this.activeModal.close('Modal Closed');
    }
    
    updateTour() {
      console.log(this.controls[4].value);
      /*
      
      for(let mybus of this.arrayOfAllBuses){
        this._tourService.addBus(mybus, this.idOfTour)
        .subscribe(res => {});
      }
      this.showNotification('top', 'right')
      */
    }
/*
    createArray(){
      this.buses = this.arrayOfAllBuses;
      console.log(this.buses);

        //esto se podria hacer mil veces mas eficiente (primera idea... un sort)... 
        for(let mybus of this.arrayOfBuses){
          for(let i = 0 ; i < this.arrayOfAllBuses.length ; i++){
            if(mybus.id == this.arrayOfAllBuses[i].id){
              this.buses[i].setValue(true);
              break;
            }
          }
        }

        console.log(this.buses);
    
    }
    */
    
    createForm() {
      this.controls = this.arrayOfAllBuses.map(c => new FormControl(false));
      console.log(this.controls[4].value);
      //esto se podria hacer mil veces mas eficiente (primera idea... un sort)... 
      for(let mybus of this.arrayOfBuses){
        for(let i = 0 ; i < this.arrayOfAllBuses.length ; i++){
          if(mybus.id == this.arrayOfAllBuses[i].id){
            this.controls[i].setValue(true);
            break;
          }
        }
      }
      console.log(this.controls[4].value);
      this.form = this.formBuilder.group({
        arrayOfAllBuses: new FormArray(this.controls)
      });
    }
    
    
    
  }
  