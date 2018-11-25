import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ITour } from '../interfaces/tour';

const API_URL = environment.apiUrl;
const AUTH = environment.token;

@Injectable()
export class TourService {
  constructor(private http: HttpClient) { }


  getTours(): Observable<ITour[]> {
    return this.http.get<ITour[]>(API_URL + '/tour', AUTH);
  }
 
  deleteTour(id): Observable<ITour>{
    if(confirm('¿Eliminar tour?')){
      return this.http.delete<ITour>(API_URL + '/tour/' + id, AUTH);
    }
  }

  addTour(name, image, description): Observable<ITour>{
    let obj = {
      name: name, 
      image: image,
      description: description, 
    }
    return this.http.post<ITour>(API_URL + '/tour/add', obj, AUTH);
  }

  

  getByIdTour(id): Observable<ITour> {
    return this.http.get<ITour>(API_URL + '/tour/' + id, AUTH);
  }

  updateTour(name, image, description, id): Observable<ITour> {
    let obj = {
      name: name, 
      image: image,
      description: description, 
    };
    return this.http.put<ITour>(API_URL + '/tour/edit/' + id, obj, AUTH);
  }

  addBus(bus, id): Observable<ITour> {
    let obj = {
      buses: bus
    };
    return this.http.put<ITour>(API_URL + '/tour/edit/' + id, obj, AUTH);

  }

  removeBus(bus, id): Observable<ITour>{
    let obj = {
      buses: bus
    };
    return this.http.put<ITour>(API_URL + '/tour/'+ id +'/remove', obj, AUTH);
  }

  addPlace(place, id): Observable<ITour> {
    let obj = {
      places: place
    };
    return this.http.put<ITour>(API_URL + '/tour/edit/' + id, obj, AUTH);

  }

  removePlace(place, id): Observable<ITour>{
    let obj = {
      places: place
    };
    return this.http.put<ITour>(API_URL + '/tour/'+ id +'/remove', obj, AUTH);
  }

  
  addTime(time, id): Observable<ITour> {
    let obj = {
      dateinformations: time
    };
    return this.http.put<ITour>(API_URL + '/tour/edit/' + id, obj, AUTH);

  }

  removeTime(time, id): Observable<ITour>{
    let obj = {
      dateinformations: time
    };
    return this.http.put<ITour>(API_URL + '/tour/'+ id +'/remove', obj, AUTH);
  }

}
