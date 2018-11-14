import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../../services/place.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

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

  ngOnInit() {
    this.createForm();
    this.getPlaceType();
  }

  addPlace(name, description,longitude,latitude,placeType,narrative){
    this.service.addPlace(name,description,longitude,latitude,placeType,narrative).subscribe(data => {
      this.places= data
      console.log(data);
    });
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
      placeType:['', Validators.required],
      narrative:['']
    });
  }
}

