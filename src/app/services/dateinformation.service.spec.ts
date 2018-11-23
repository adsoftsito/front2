import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { DateinformationService } from './dateinformation.service';
import { IDate } from '../interfaces/date';

describe('DateinformationService', () => {
  let service: DateinformationService;
  let httpMock : HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers:[
      
      DateinformationService
    ],
    imports:[
      HttpClientTestingModule
    ]
  })
  service = TestBed.get(DateinformationService);
  httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: DateinformationService = TestBed.get(DateinformationService);
    expect(service).toBeTruthy();
  });

  it('should return a list of dateinformation from API', () =>{
    const fakeDates: IDate[]  = 
     [
    {id:1, date_id:1, hour_id:2, tours: []}
      
    ];

    service.getInformation().subscribe(admins => {
      expect(admins.length).toBe(1);
      expect(admins).toEqual(fakeDates);
    });

    const request = httpMock.expectOne("https://er-citytourister.appspot.com"+'/dateinformation');
    expect(request.request.method).toBe("GET");
    request.flush(fakeDates);
  });
});
