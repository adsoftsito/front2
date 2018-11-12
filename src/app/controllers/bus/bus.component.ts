import { Component, OnInit } from '@angular/core';
import { BusService } from '../../services/bus.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalAddBus} from './modals/BusAddModal.component';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent implements OnInit {

  public buses = [];
  // selectedUsuario: any;
  constructor(
    private service: BusService, 
    private _modalService: NgbModal) { }

  openFormModal() {
    const modalRef = this._modalService.open(NgbdModalAddBus);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  
  getBuses() {
    this.service.getBuses()
    .subscribe(res => {
      this.buses = res;
      
    });
   
  }

  ngOnInit() {
    this.getBuses();
   
  }
  ngOnChanges(){
   this.getBuses();
  }
  deleteBus(id) {
    if(confirm("Desea eliminar autobus?")){
      this.service.deleteBus(id).subscribe(data => {
        this.ngOnChanges(); 
      });
    }
  }
}




