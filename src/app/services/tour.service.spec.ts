import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ITour } from '../interfaces/tour';
import { TourService } from './tour.service';

describe('TourService', () => {
  let service: TourService;
  let httpMock : HttpTestingController;
  beforeEach(() => { 
    TestBed.configureTestingModule({
    providers: [
      TourService,
      
    ],

    imports:
    [
      HttpClientTestingModule,  
    ]

  });

  service = TestBed.get(TourService);
  httpMock = TestBed.get(HttpTestingController);
});

  it('should be created', () => {
    const service: TourService = TestBed.get(TourService);
    expect(service).toBeTruthy();
  });

  it('should return a list of tours from API', () =>{
    const fakeTours: ITour[]  = 
     [
      {id:1, name:"Cholula Fascinante",image:"url", description:"lorem ipsum kdka",bracelets:[],buses:[], dateinformations:[],places:[]},
     
    ];

    service.getTours().subscribe(tours => {
      expect(tours.length).toBe(1);
      expect(tours).toEqual(fakeTours);
    });

    const request = httpMock.expectOne("https://er-citytourister.appspot.com"+'/tour');
    expect(request.request.method).toBe("GET");
    request.flush(fakeTours);
  });
});
