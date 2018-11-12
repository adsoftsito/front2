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
  hours: any;
  dateInformation:any;
  hour: any;
  angForm: FormGroup;
  myForm : FormGroup;
  myInfo :FormGroup;
  show: boolean;
  information:boolean;

  constructor(private service: DateinformationService, private route: ActivatedRoute, private router: Router,private fb: FormBuilder) {
    this.createForm();
    this.createDate();
    this.createInfo();
    
   }

   getDates() {
    this.service.getDates().subscribe(res => {this.dates = res;});
  }

  getHours() {
    this.service.getHours().subscribe(res => {this.hours = res;});
  }

  ngOnInit() {
    this.show = false;
    this.information =false;
    this.getDates();
    this.getHours();
  }

  ngOnchanges(){
    this.getInformation();
    this.getDates();
    this.getHours();
  }

  

  getInformation(){
    this.service.getInformation().subscribe(res =>{
        this.dateInformation =res;
    });
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

  createDate(){
    this.myForm = this.fb.group({
      start_time:[''],
      end_time:[''],
      frequency:['']
    })
  }

  createInfo(){
    this.myInfo =this.fb.group({
      hour:[''],
      date:['']
    })
  }

  addDate(start_date,end_date,service){
    this.service.addDate(start_date,end_date,service).subscribe(data => this.dates = data);
    this.show =true;
    
  }

  addHour(start_time, end_time, frequency){
    this.service.addHour(start_time,end_time,frequency).subscribe(data => {
      this.hours = data
      console.log(data);
    });
    this.information = true;
    this.getDates();
    this.getHours();
    this.getDates();
    this.getHours();
    
  }
  

  addInformationDate(date_id,hour_id){
    this.service.addInformationDate(date_id,hour_id).subscribe(data=>{
      this.dateInformation = data;
      console.log(data);
    });
   
    this.router.navigate(['/dateinformation']);
    this.getInformation();
    
  }

 

}
