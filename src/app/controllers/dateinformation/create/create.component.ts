import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { DateinformationService } from '../../../services/dateinformation.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  date: any;
  dates: any;
  angForm: FormGroup;

  constructor(private service: DateinformationService, private route: ActivatedRoute, private router: Router,private fb: FormBuilder) {
    this.createForm();
   }
  ngOnInit() {
  }

  getDates() {
    this.service.getDates().subscribe(res => {this.dates = res;});
  }
  createForm() {
    // schema que guarda los valores y validaciones
    // uso de form builder, la estructura es diferente
    // guarda a name y email en un solo grupo
    // The value for each control name is an array containing the initial value as the first item in the array.
    this.angForm = this.fb.group({
      // hace que el valor sea requerido
      start_date: [''], //checar validators
      end_date: [''] ,
      servicio: [''] 
   });
  }

  addDate(start_date,end_date,service){
    this.service.addDate(start_date,end_date,service).subscribe(data => this.dates = data);
    this.router.navigate(['/dateinformation']);
    console.log(service);
    this.getDates();
  }

}
