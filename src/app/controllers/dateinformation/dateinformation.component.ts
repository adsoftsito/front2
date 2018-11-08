import { Component, OnInit } from '@angular/core';
import { DateinformationService } from '../../services/dateinformation.service';


@Component({
  selector: 'app-dateinformation',
  templateUrl: './dateinformation.component.html',
  styleUrls: ['./dateinformation.component.scss']
})
export class DateinformationComponent implements OnInit {
  public dates = [];
  constructor(private service: DateinformationService) { }

  ngOnInit() {
    this.service.getDates()
    .subscribe(data => this.dates = data);
  }

  ngOnChanges(){
    this.service.getDates()
    .subscribe(data => this.dates = data);
    // this.selectedUsuario = "";
  }
  deleteDate(id) {
    if(confirm("Desea eliminar el horario?")){
      this.service.deleteDate(id).subscribe(data => {
        this.ngOnChanges(); 
      });
    }
  }


}
