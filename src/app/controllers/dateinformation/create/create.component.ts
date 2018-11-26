import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { DateinformationService } from '../../../services/dateinformation.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
// jquery
declare const $: any;
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  date: any;
  dates: any;
  hours: any;
  fecha:any;
  dateInformation:any;
  hour: any;
  angForm: FormGroup;
  myForm : FormGroup;
  myInfo :FormGroup;
  show: boolean;
  information:boolean;
  start_date: Date;
  end_date: Date;
  
  constructor(
    private service: DateinformationService, 
    private route: ActivatedRoute, 
    private router: Router,
    private fb: FormBuilder) {
    this.createForm();
    this.createDate();
    
  }
  showNotification(data, from, align){
    $.notify({
      message: "Nuevo fecha y hora agregados, elija el intervalo"
    },{
      type: data.color,
      timer: 1000,
      placement: {
        from: from,
        align: align
      },
      template: `<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">
      <button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>
      <span data-notify="icon"></span>
      <span data-notify="message">{2}</span>
      <div class="progress" data-notify="progressbar">
      <div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>
      </div>
      </div>`,
      onShow: ()=>{
        
      },
      onClose: ()=>{
        this.router.navigate(['/selectdate']);
      }
    });
  }
  
  getDates() {
    this.service.getDates().subscribe(res => {this.dates = res;
      console.log(res);
    });
  }
  
  getHours() {
    this.service.getHours().subscribe(res => {this.hours = res;
      console.log(res);
    });
  }
  
  ngOnInit() {
    this.show = false;
    this.information =false;
    this.getDates();
    this.getHours();
    this.getInformation();
  }
  
  ngOnchanges(){
    this.getInformation();
  }
  
  
  
  getInformation(){
    this.service.getInformation().subscribe(res =>{
      this.dateInformation =res;
    });
  }
  createForm() {  
    this.angForm = this.fb.group({
      fecha: ['',Validators.required], 
      end_date: ['',Validators.required] ,
      servicio: ['',Validators.required]
      
    });
  }
  
  createDate(){
    this.myForm = this.fb.group({
      start_time:['',Validators.required],
      end_time:['',Validators.required],
      frequency:['',Validators.required]
    })
  }
  
  
  addDate(fecha,end_date,service){
   
    console.log(fecha);
    console.log(end_date);  
    this.service.addDate(this.dates.fecha,this.dates.end_date,service).subscribe(data => {
      this.dates = data;
      console.log(data);
    });
    this.show =true;
    
  }

  addStartDate(event: MatDatepickerInputEvent<Date>) {
    this.start_date = new Date(event.value);
    this.dates.fecha= this.start_date.getTime() / 1000.0;
     console.log(this.dates.fecha);
  }

  addEndDate(event: MatDatepickerInputEvent<Date>) {
    this.end_date = new Date(event.value);
    this.dates.end_date=this.end_date.getTime() / 1000.0;
    console.log(this.dates.end_date);
  }
  
  addHour(start_time, end_time, frequency){
    this.service.addHour(start_time,end_time,frequency).subscribe(data => {
      this.hours = data
      console.log(data);
      this.showNotification(data,'bottom','center');
    });
    
    this.information = true; 
    // this.router.navigate(['/selectdate']);
  }
}
