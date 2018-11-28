import { Component, OnInit, EventEmitter } from '@angular/core';
import { TourService } from '../services/tour.service';
import { MatSelectChange } from '@angular/material/select';

declare const google: any;

class Marker {
    public lat: number;
    public lng: number;
    public name: string;
    public image_url: boolean;

    constructor(lat: number, lng: number, name: string, image_url) {
        this.lat = lat;
        this.lng = lng;
        this.name = name;
        this.image_url = image_url;
    }
}

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  center = {
    lat: 19.04334,
    lng: -98.20193
  }

  arrayOfTours = [];
  currentTour = {
    id: 0,
    places: []
  }

  markersOnMap: Marker[] = [];

  constructor(
      private _tourService: TourService
  ) { }

  ngOnInit() {
    this.getTours();
  }

  getTours() {
       this._tourService.getTours()
       .subscribe(res => {
            this.arrayOfTours = res;
            this.currentTour.id = this.arrayOfTours[0].id;
            this.currentTour.places = this.arrayOfTours[0].places;
            this.drawMarkersOnMap(this.currentTour.places);
       });
  }

  drawMarkersOnMap(arrayOfPlaces) {
    this.markersOnMap = [];
    arrayOfPlaces.forEach((place) => {
        this.markersOnMap.push(new Marker(
            Number.parseFloat(place.latitude),
            Number.parseFloat(place.longitude),
            place.name,
            place.image_url
        ));
    })
  }

  updateCurrentTour(id) {
    for (const tour of this.arrayOfTours) {
        if (tour.id === id) {
            this.currentTour.places = tour.places;
            this.currentTour.id = tour.id;
        }
    }
    this.drawMarkersOnMap(this.currentTour.places);
  }
}
