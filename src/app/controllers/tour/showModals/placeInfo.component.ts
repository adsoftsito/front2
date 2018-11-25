import { Component, Output, EventEmitter, Input} from '@angular/core';
import { PlaceService } from '../../../services/place.service';
import { TourService } from '../../../services/tour.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn} from '@angular/forms';
declare const $: any;
@Component({
  selector: 'app-aboutplace',
  templateUrl: './placeInfo.component.html'
})

export class PlaceInfoComponent{ 
  
  @Input() actualTour;
  form: FormGroup;
  arrayOfPlaces = []
  arrayOfAllPlaces = [undefined];
  controls;
  
  constructor(private formBuilder: FormBuilder,  
    private _placeService: PlaceService,
    public activeModal: NgbActiveModal,
    private _tourService: TourService) {}
    
    ngOnInit(){
      this.arrayOfPlaces = this.actualTour.places;
      this.getPlaces();
    }
    
    getPlaces(){
      this._placeService.getPlaces().subscribe(res => { this.arrayOfAllPlaces = res; this.createForm() });
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
          window.location.reload();
        }
      });
    }
    
    closeModal() {
      this.activeModal.close('Modal Closed');
    }
    
    updateTour() {
      for(let i = 0; i < this.arrayOfAllPlaces.length; i++){
        if(this.controls[i].value == true){
          //add bus
          this._tourService.addPlace(this.arrayOfAllPlaces[i].id, this.actualTour.id).subscribe();
        }else{
          //remove bus
          this._tourService.removePlace(this.arrayOfAllPlaces[i].id, this.actualTour.id).subscribe();
        }
      }
      this.showNotification('top', 'right');
     
    }

    
    createForm() {
      this.controls = this.arrayOfAllPlaces.map(c => new FormControl(false));
      //esto se podria hacer mil veces mas eficiente (primera idea... un sort)... 
      for(let mybus of this.arrayOfPlaces){
        for(let i = 0 ; i < this.arrayOfAllPlaces.length ; i++){
          if(mybus.id == this.arrayOfAllPlaces[i].id){
            this.controls[i].setValue(true);
            break;
          }
        }
      }
      this.form = this.formBuilder.group({
        arrayOfAllPlaces: new FormArray(this.controls)
      });
    }
    
    
    
  }
  