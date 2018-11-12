import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { DateinformationService } from '../../../services/dateinformation.service';

@Component({
  selector: 'app-selectdate',
  templateUrl: './selectdate.component.html',
  styleUrls: ['./selectdate.component.scss']
})
export class SelectdateComponent implements OnInit {
  date: any;
  dates: any;
  hours: any;
  dateInformation:any;
  hour: any;
  myInfo :FormGroup;
  show: boolean;
  information:boolean;

  constructor(private service: DateinformationService, private route: ActivatedRoute, private router: Router,private fb: FormBuilder) { }

  ngOnInit() {
    this.createInfo();
    this.getDates();
    this.getHours();
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

  createInfo(){
    this.myInfo =this.fb.group({
      hour:[''],
      date:['']
    })
  }
  getInformation(){
    this.service.getInformation().subscribe(res =>{
        this.dateInformation =res;
    });
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
