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
      start_date: [''], 
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
    this.router.navigate(['/selectdate']);
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
