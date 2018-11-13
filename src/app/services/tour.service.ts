import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { ITour } from '../interfaces/tour';

const API_URL = environment.apiUrl;

@Injectable()
export class TourService {
  constructor(private http: HttpClient) { }


  getTours(): Observable<ITour[]> {
    return this.http.get<ITour[]>(API_URL + '/tour');
  }
 
  deleteTour(id): Observable<ITour>{
    if(confirm("¿Eliminar tour type?")){
      return this.http.delete<ITour>(API_URL+'/tour'+'/'+id);
    }
  }

  addTour(name, image, description, tickets, buses, dateinformations, places): Observable<ITour>{
    let obj = {
      name: name, 
      image: image,
      description: description, 
      tickets: tickets,
      buses: buses,
      dateinformations: dateinformations,
      places: places
    }
    return this.http.post<ITour>(API_URL + '/tour/add', obj);
  }

  

  getByIdTour(id): Observable<ITour> {
    return this.http.get<ITour>(API_URL + '/tour/'+id);
  }

  updateTour(name, image, description, tickets, buses, dateinformations, places, id): Observable<ITour> {
    let obj = {
      name: name, 
      image: image,
      description: description, 
      tickets: tickets,
      buses: buses,
      dateinformations: dateinformations,
      places: places
    };
    return this.http.put<ITour>(API_URL + '/tour/edit/'+id, obj);
  }

}
