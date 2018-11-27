import { Component, Input, OnInit} from '@angular/core';
import { TourService } from '../../../services/tour.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn} from '@angular/forms';
declare const $: any;
@Component({
  selector: 'app-aboutplace',
  templateUrl: './placeInfo.component.html'
})

export class PlaceInfoComponent implements OnInit {
  
  @Input() actualTour;
  @Input() places;

  arrayOfTourIndex = [];
  arrayOfAllPlaces = [];
  
  constructor(private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private _tourService: TourService) {}
    
  ngOnInit() {
    this.arrayOfAllPlaces = this.places;
    this.mapPlacesFromTourIndex(this.actualTour.places);
  }

  mapPlacesFromTourIndex(tourPlaces) {
    tourPlaces.map((bus) => {
      this.arrayOfTourIndex.push(bus.id);
    });
    this.arrayOfAllPlaces.map((value) => {
      value.placeAtTour = false;
      if (this.arrayOfTourIndex.includes(value.id)) {
        value.placeAtTour = true;
      }
    });
  }

  updateTour() {
    for (const place of this.arrayOfAllPlaces) {
      if (place.placeAtTour) {
        this._tourService.addPlace(place.id, this.actualTour.id).subscribe();
      } else {
        this._tourService.removePlace(place.id, this.actualTour.id).subscribe();
      }
    }
    this.showNotification('top', 'right');
  }
  
  showNotification(from, align) {
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
      }
    });
  }
  
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}