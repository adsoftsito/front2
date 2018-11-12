import { Component, OnInit } from '@angular/core';
import { DateinformationService } from '../../services/dateinformation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-dateinformation',
  templateUrl: './dateinformation.component.html',
  styleUrls: ['./dateinformation.component.scss']
})
export class DateinformationComponent implements OnInit {
  public dates = [];
  // public hours = [];
  public dateInformation =[];
  constructor(private service: DateinformationService, private route: ActivatedRoute, private router: Router,private fb: FormBuilder) { }

  ngOnInit() {
    this.service.getInformation()
    .subscribe(data => this.dates = data);
    
  }

  ngOnChanges(){
    this.service.getInformation()
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
