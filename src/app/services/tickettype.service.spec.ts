import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ITicketType} from '../interfaces/tickettype';
import { TicketTypeService } from './tickettype.service';

describe('TickettypeService', () => {
  let service: TicketTypeService;
  let httpMock : HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [
      TicketTypeService 
    ],
    imports:
    [
      HttpClientTestingModule,  
    ]
  });
  service = TestBed.get(TicketTypeService);
  httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: TicketTypeService = TestBed.get(TicketTypeService);
    expect(service).toBeTruthy();
  });

  it('should return a list of tickettypes from API', () =>{
    const fakeTickets: ITicketType[]  = 
     [
      {id:1, name:"Niños", description:"lorem ipsum kdka",prices:[]},
     
    ];

    service.getTicketTypes().subscribe(tickets => {
      expect(tickets.length).toBe(1);
      expect(tickets).toEqual(fakeTickets);
    });

    const request = httpMock.expectOne("https://er-citytourister.appspot.com"+'/tickettype');
    expect(request.request.method).toBe("GET");
    request.flush(fakeTickets);
  });
});
