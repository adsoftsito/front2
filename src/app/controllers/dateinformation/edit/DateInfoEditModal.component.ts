import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { DateinformationService } from '../../../services/dateinformation.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { isNumber } from 'util';

@Component({
  selector: 'app-edit',
  templateUrl: './DateInfoEditModal.component.html',
  styleUrls: ['./edit.component.scss']
})
export class DateInfoEditModalComponent implements OnInit {

  @Input() id: any;

  switchToAddModal = false;

  dateInterval: any;
  start_date: Date;
  end_date: Date;

  hourInterval: any;
  start_hour: any;
  end_hour: any;

  constructor(
    private service: DateinformationService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private activeModal: NgbActiveModal) {
      this.start_date = new Date();
      this.end_date = new Date();
    }

  ngOnInit() {
    if (!isNumber(this.id)) {
      this.switchToAddModal = true;
      this.getHoursAndMinutes(this.start_date, this.end_date);
      console.log('SwitchToAddModal: ' + this.switchToAddModal + ' start: ' + this.start_date);
    } else {
      this.populateById(this.id);
    }
  }

  addDate() {
    let date_id;
    this.service.addDate(this.start_date, this.end_date, this.dateInterval.service)
    .subscribe(res => {
      date_id = res.id;
      this.addHour(date_id);
    }, err => {
      console.log('Error adding Date Interval');
      console.log(err);
    });
  }

  addHour(date_id) {
    let hour_id;
    this.hourInterval.start_time = Math.trunc(this.start_hour.getTime() / 1000);
    this.hourInterval.end_time = Math.trunc(this.end_hour.getTime() / 1000);
    this.service.addHour(
      this.hourInterval.start_time, 
      this.hourInterval.end_time,
      this.hourInterval.frequency
    ).subscribe( res => {
      hour_id = res.id;
      this.addDateInfo(date_id, hour_id);
    }, err => {
      console.log('Error adding Hour Interval');
      console.log(err);
    });
  }

  addDateInfo(date_id, hour_id) {
    this.service.addInformationDate(date_id, hour_id)
    .subscribe(res => {
      console.log(res);
    })
  }

  populateById(id) {
    this.service.getDateInfoById(id)
    .subscribe( res => {
      this.dateInterval = res.date_id;
      this.start_date = new Date(this.dateInterval.start_date * 1000.0);
      this.end_date = new Date(this.dateInterval.end_date * 1000.0);
      this.hourInterval = res.hour_id;
      this.getHoursAndMinutes(
        new Date(this.hourInterval.start_time * 1000.0),
        new Date(this.hourInterval.end_time * 1000.0)
      )
    });
  }

  updateDateInfo() {
    this.updateDateInterval();
    this.updateHourInterval();
    this.activeModal.close();
  }

  updateHourInterval() {
    const temp = {
      start: new Date(),
      end: new Date()
    };
    temp.start.setHours(this.start_hour.hour);
    temp.start.setMinutes(this.start_hour.minute);
    temp.start.setSeconds(0);
    this.hourInterval.start_time = Math.trunc(temp.start.getTime() / 1000);
    temp.end.setHours(this.end_hour.hour);
    temp.end.setMinutes(this.end_hour.minute);
    temp.end.setSeconds(0);
    this.hourInterval.end_time = Math.trunc(temp.end.getTime() / 1000);
    this.service.updateHour(
      this.hourInterval.id,
      this.hourInterval.start_time,
      this.hourInterval.end_time,
      this.hourInterval.frequency
    ).subscribe(res => {
      console.log(res);
    });
  }

  getHoursAndMinutes(start_time, end_time) {
    this.start_hour = {
      hour: start_time.getHours(),
      minute: start_time.getMinutes()
    }

    this.end_hour = {
      hour: end_time.getHours(),
      minute: end_time.getMinutes()
    }
  }

  updateDateInterval() {
    this.service.updateDate(
      this.dateInterval.id,
      this.dateInterval.start_date,
      this.dateInterval.end_date,
      this.dateInterval.service)
    .subscribe(res => {
      console.log(res);
    })
  }

  updateStartDate(event: MatDatepickerInputEvent<Date>) {
    this.start_date = new Date(event.value);
    this.dateInterval.start_date = this.start_date.getTime() / 1000.0;
    console.log(this.start_date)
  }

  updateEndDate(event: MatDatepickerInputEvent<Date>) {
    this.end_date = new Date(event.value);
    this.dateInterval.end_date = this.end_date.getTime() / 1000.0;
    console.log(this.end_date);
  }

}
