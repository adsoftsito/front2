import { Component, OnInit } from '@angular/core';
import { MuralService } from '../../services/mural.service';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.scss']
})
export class MuralComponent implements OnInit {
  public murales = [];
  constructor(private service: MuralService) { }

  ngOnInit() {
    this.service.getMurales()
    .subscribe(data => this.murales = data);
  }

  ngOnChanges(){
    this.service.getMurales()
    .subscribe(data => this.murales = data);
    // this.selectedUsuario = "";
  }
  deleteMural(id) {
    if(confirm("Desea eliminar el mural?")){
      this.service.deleteMural(id).subscribe(data => {
        this.ngOnChanges(); 
      });
    }
  }

}
