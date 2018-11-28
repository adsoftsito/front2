import { Component, OnInit } from '@angular/core';
import { DateinformationService } from '../../services/dateinformation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DateInfoEditModalComponent } from './edit/DateInfoEditModal.component';


@Component({
  selector: 'app-dateinformation',
  templateUrl: './dateinformation.component.html',
  styleUrls: ['./dateinformation.component.scss']
})
export class DateinformationComponent implements OnInit {
  
  public dates = [];
  
  constructor(
    private _dateInfoService: DateinformationService,
    private _modalService: NgbModal) { }

  ngOnInit() {
    this.getDateInfo();
  }

  getDateInfo() {
    this._dateInfoService.getInformation()
    .subscribe(data => {
      this.dates = data;
      console.log('Datesss');
      this.convertToDates(this.dates);
      this.convertToHours(this.dates);
      console.log(this.dates);
    });
  }

  convertToDates(arrayOfDates) {
    let temp_start, temp_end;
    for (let i = 0; i < arrayOfDates.length; i++) {
      temp_start = new Date(this.dates[i].date_id.start_date * 1000.0);
      this.dates[i].date_id.start_date = temp_start.toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
      temp_end = new Date(this.dates[i].date_id.end_date * 1000.0);
      this.dates[i].date_id.end_date = temp_end.toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }
  }

  convertToHours(arrayOfDates) {
    let temp_start, temp_end;
    for (let i = 0; i < arrayOfDates.length; i++) {
      temp_start = new Date(this.dates[i].hour_id.start_time * 1000.0);
      this.dates[i].hour_id.start_time = temp_start.toLocaleTimeString();
      temp_end = new Date(this.dates[i].hour_id.end_time * 1000.0);
      this.dates[i].hour_id.end_time = temp_end.toLocaleTimeString();
    }
  }

  openEditModal(id) {
    const modalRef = this._modalService.open(DateInfoEditModalComponent, {size: 'lg'});
    modalRef.componentInstance.id = id;

    modalRef.result.then(res => {
        this.getDateInfo();
      }, err => {
        this.getDateInfo();
      }
    );
  }

  deleteDate(id) {
    if (confirm('Desea eliminar el horario?')) {
      this._dateInfoService.deleteDateInfo(id)
      .subscribe(data => {
        this.ngOnInit();
      });
    }
  }
}
