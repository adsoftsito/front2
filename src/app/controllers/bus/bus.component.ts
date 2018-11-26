import { Component, OnInit } from '@angular/core';
import { BusService } from '../../services/bus.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalAddBus} from './modals/BusAddModal.component';
import { NgbdModalEditBus} from './modals/BusEditModal.component';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent implements OnInit {

  public arrayOfBuses = [];
  
  constructor(
    private service: BusService, 
    private _modalService: NgbModal) { }

  openFormModal() {
    const modalRef = this._modalService.open(NgbdModalAddBus);
    
    modalRef.result.then((result) => {
      this.getBuses();
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  openFormModalEdit(id) {
    const modalRef = this._modalService.open(NgbdModalEditBus);
    modalRef.componentInstance.id = id;

    modalRef.result.then((result) => {
      this.getBuses();
    }).catch((error) => {
      console.log(error);
    });
  }

  
  getBuses() {
    this.service.getBuses()
    .subscribe(res => {
      this.arrayOfBuses = res;
      console.log(res); 
      
    });
   
  }

  ngOnInit() {
    this.getBuses();
  }
  
  ngOnChanges(){
   this.getBuses();
  }
  deleteBus(id) {
    if(confirm("Desea eliminar el autobus?")){
      this.service.deleteBus(id).subscribe(data => {
        this.getBuses();
      });
    }
  }
}




