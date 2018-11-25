import { Component, OnInit, Input, Pipe } from '@angular/core';
import { TourService } from '../../../services/tour.service';
import { DateinformationService } from '../../../services/dateinformation.service';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn} from '@angular/forms';
declare const $: any;

@Component({
    selector: 'app-abouttime',
    templateUrl: './timeInfo.component.html'
})

export class TimeInfoComponent implements OnInit{

    @Input() actualTour;
    @Input() dateInfo;

    arrayOfAllDateInfos = [];
    arrayOfTourIndex = [];
    
    constructor(
        private _tourService: TourService,
        private activeModal: NgbActiveModal){ }
        
    ngOnInit() {
        this.arrayOfAllDateInfos = this.dateInfo;
        this.mapDateInfoFromTourIndex(this.actualTour.dateinformations);
        this.convertToDates(this.arrayOfAllDateInfos);
        this.convertToHours(this.arrayOfAllDateInfos);
    }

    mapDateInfoFromTourIndex(tourDateInfos) {
        for (const date of tourDateInfos) {
            this.arrayOfTourIndex.push(date.id);
        }
        this.arrayOfAllDateInfos.map((value) => {
            if (this.arrayOfTourIndex.includes(value.id)) {
                value.dateAtTour = true;
            } else {
                value.dateAtTour = false;
            }
        });
    }

    convertToHours(arrayOfDates) {
      let temp_start, temp_end;
      for (let i = 0; i < arrayOfDates.length; i++) {
        temp_start = new Date(this.arrayOfAllDateInfos[i].hour_id.start_time * 1000.0);
        this.arrayOfAllDateInfos[i].hour_id.start_time = temp_start.toLocaleTimeString();
        temp_end = new Date(this.arrayOfAllDateInfos[i].hour_id.end_time * 1000.0);
        this.arrayOfAllDateInfos[i].hour_id.end_time = temp_end.toLocaleTimeString();
      }
    }

    convertToDates(arrayOfDates) {
      let temp_start, temp_end;
      for (let i = 0; i < arrayOfDates.length; i++) {
        temp_start = new Date(this.arrayOfAllDateInfos[i].date_id.start_date * 1000.0);
        this.arrayOfAllDateInfos[i].date_id.start_date = temp_start.toLocaleDateString('es-MX', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
        temp_end = new Date(this.arrayOfAllDateInfos[i].date_id.end_date * 1000.0);
        this.arrayOfAllDateInfos[i].date_id.end_date = temp_end.toLocaleDateString('es-MX', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      }
    }

    updateTour() {
      for (const date of this.arrayOfAllDateInfos) {
        if (date.dateAtTour) {
          this._tourService.addTime(date.id, this.actualTour.id).subscribe();
        } else {
          this._tourService.removeTime(date.id, this.actualTour.id).subscribe();
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