import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { DateinformationService } from '../../../services/dateinformation.service';
//esto es para jquery
declare const $: any;
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
  

  constructor(private service: DateinformationService, private route: ActivatedRoute, private router: Router,private fb: FormBuilder) { }
  
  showNotification(data, from, align){
    $.notify({
        message: "Nuevo horario agregado."
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
          this.router.navigate(['/dateinformation']);
        }
    });
}

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
      hour:['',Validators.required],
      date:['',Validators.required]
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
      this.showNotification(data, 'top', 'left');
    });
    
   
    // this.router.navigate(['/dateinformation']);
    this.getInformation();
    // window.location.reload();
    
  }
  ngOnchanches(){
    this.getInformation();
    this.getDates();
    this.getHours();
  }


}
