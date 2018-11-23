import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { DateinformationService } from '../../../services/dateinformation.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit',
  templateUrl: './DateInfoEditModal.component.html',
  styleUrls: ['./edit.component.scss']
})
export class DateInfoEditModalComponent implements OnInit {

  @Input() id: number;

  dateInterval = [];
  hourInterval = [];

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
      this.hourInterval = res.hour_id;
    });
  }

}
