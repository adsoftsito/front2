import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  public places = [];
  constructor(private service: PlaceService) { }

  ngOnInit() {
    this.service.getPlaces()
    .subscribe(data => this.places = data);
  }


  ngOnChanges(){
    this.service.getPlaces()
    .subscribe(data => this.places = data);
    // this.selectedUsuario = "";
  }
  deletePlace(id) {
    if(confirm("Desea eliminar el lugar?")){
      this.service.deletePlace(id).subscribe(data => {
        this.ngOnChanges(); 
      });
    }
  }

}
