import { Component, Input, OnInit} from '@angular/core';
import { BusService } from '../../../services/bus.service';
import { TourService } from '../../../services/tour.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn} from '@angular/forms';

declare const $: any;
@Component({
  selector: 'app-aboutbus',
  templateUrl: './busInfo.component.html'
})

export class BusInfoComponent implements OnInit{ 
  

  @Input() actualTour;
  @Input() buses;
  
  arrayOfAllBuses = [];
  arrayOfTourIndex = [];
  
  constructor(
    public activeModal: NgbActiveModal,
    private _tourService: TourService) {}
    
    ngOnInit() {
      this.arrayOfAllBuses = this.buses;
      this.mapBusFromTourIndex(this.actualTour.buses);
    }

    mapBusFromTourIndex(tourBuses) {
      tourBuses.map((bus) => {
        this.arrayOfTourIndex.push(bus.id);
      });
      this.arrayOfAllBuses.map((value) => {
        value.busAtTour = false;
        if (this.arrayOfTourIndex.includes(value.id)) {
          value.busAtTour = true;
        }
      });
    }
    
    updateTour() {
      for (const bus of this.arrayOfAllBuses) {
        if (bus.busAtTour) {
          this._tourService.addBus(bus.id, this.actualTour.id).subscribe();
        } else {
          this._tourService.removeBus(bus.id, this.actualTour.id).subscribe();
        }
      }
      this.showNotification('top', 'right');
    }

    closeModal() {
      this.activeModal.close('Modal Closed');
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
        onShow: () => {
          this.closeModal();
        }
      });
    }
    
  }
  