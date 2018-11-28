import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../../services/place.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
//esto es para jquery
declare const $: any;
@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.scss']
})
export class CreatePlaceComponent implements OnInit {

  places:any;
  placeTypes: any;
  placeForm: FormGroup;


  constructor(private service: PlaceService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { 
    this.createForm();
  }

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
          this.router.navigate(['/place']);
        }
    });
}

  ngOnInit() {
    this.createForm();
    this.getPlaceType();
  }

  addPlace(name, description,longitude,latitude,place_type_id,narrative){
    this.service.addPlace(name,description,longitude,latitude,place_type_id,narrative, 1).subscribe(data => {
      this.places= data
      console.log(data);
      this.showNotification(data, "top","left");
    });
  }

  ngOnchanges(){
    this.getPlaceType();
  }
  getPlaceType() {
    this.service.getPlaceType().subscribe(res => {this.placeTypes = res;
      console.log(res);
    });
  }

  createForm(){
    this.placeForm = this.fb.group({
      name:['',Validators.required],
      description:['',Validators.required],
      longitude:['',Validators.required],
      latitude:['', Validators.required],
      place_type_id:['', Validators.required],
      narrative:['']
    });
  }
}

