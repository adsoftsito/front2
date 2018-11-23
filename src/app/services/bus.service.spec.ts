import { TestBed, inject } from '@angular/core/testing';

import { BusService } from './bus.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { IBus } from '../interfaces/bus';


describe('BusService', () => {
  let service: BusService;
  let httpMock : HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        
        BusService
      ],
      imports:[
        HttpClientTestingModule,
        
        
      ]
    });

    service = TestBed.get(BusService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([BusService], (service: BusService) => {
    expect(service).toBeTruthy();
  }));
  it('should have add bus function', inject([BusService], (service: BusService) => {
    expect(service.addBus).toBeTruthy();
  }));
  it('should have getBuses function', inject([BusService], (service: BusService) => {
    expect(service.getBuses).toBeTruthy();
  }));
  it('should have getById function', inject([BusService], (service: BusService) => {
    expect(service.getByIDBus).toBeTruthy();
  }));

  it('should have delete bus function', inject([BusService], (service: BusService) => {
    expect(service.deleteBus).toBeTruthy();
  }));

  it('should return a list of buses from API', () =>{
    const fakeBuses: IBus[]  = 
     [
      {id:1, numBus:"777",availability:true, tour_id:1},
      {id:2, numBus:"778",availability:true, tour_id:2}
    ];

    service.getBuses().subscribe(buses => {
      expect(buses.length).toBe(2);
      expect(buses).toEqual(fakeBuses);
    });

    const request = httpMock.expectOne("https://er-citytourister.appspot.com"+'/bus');
    expect(request.request.method).toBe("GET");
    request.flush(fakeBuses);
  });
});
