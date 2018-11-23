import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { DateinformationService } from '../../../services/dateinformation.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit',
  templateUrl: './DateInfoEditModal.component.html',
  styleUrls: ['./edit.component.scss']
})
export class DateInfoEditModalComponent implements OnInit {

  @Input() id: number;

  dateInterval: any;
  start_date: Date;
  end_date: Date;

  hourInterval: any;
  start_hour: Date;
  end_hour: Date;

  constructor(
    private service: DateinformationService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.service.getDateInfoById(this.id)
    .subscribe( res => {
      this.dateInterval = res.date_id;
      this.start_date = new Date(this.dateInterval.start_date * 1000.0);
      this.end_date = new Date(this.dateInterval.end_date * 1000.0);
      this.hourInterval = res.hour_id;
    });
  }

  updateDateInterval() {
    this.service.updateDate(
      this.dateInterval.id,
      this.dateInterval.start_date,
      this.dateInterval.end_date,
      this.dateInterval.service)
    .subscribe(res => {
      console.log(res);
      this.activeModal.close();
    })
  }

  updateStartDate(event: MatDatepickerInputEvent<Date>) {
    this.start_date = new Date(event.value);
    this.dateInterval.start_date = this.start_date.getTime() / 1000.0;
  }

  updateEndDate(event: MatDatepickerInputEvent<Date>) {
    this.end_date = new Date(event.value);
    this.dateInterval.end_date = this.end_date.getTime() / 1000.0;
  }

}
