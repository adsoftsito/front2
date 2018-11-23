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
  date:any;
  // public hours = [];
  public dateInformation = [];
  constructor(
    private _dateInfoService: DateinformationService, 
    private route: ActivatedRoute, 
    private router: Router,
    private fb: FormBuilder,
    private _modalService: NgbModal) { }

  ngOnInit() {
    this._dateInfoService.getInformation()
    .subscribe(data => {
      this.dates = data;
    });
  }

  ngOnChanges() {
    this._dateInfoService.getInformation()
    .subscribe(data => this.dates = data);
  }

  openEditModal(id) {
    const modalRef = this._modalService.open(DateInfoEditModalComponent, {size: 'lg'});
    modalRef.componentInstance.id = id;
  }

  deleteDate(id) {
    if (confirm('Desea eliminar el horario?')) {
      this._dateInfoService.deleteDate(id).subscribe(data => {
        this.ngOnChanges();
      });
    }
  }

  getByIDDate() {
    this.route.params.subscribe(params => {
      this.date = this._dateInfoService.getDateById(params['id'])
      .subscribe(res => {
        this.date = res;
    });
  });
  }


}
