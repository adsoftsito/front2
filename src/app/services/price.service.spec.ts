import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { IPrice } from '../interfaces/price';
import { PriceService } from './price.service';

describe('PriceService', () => {
  let service: PriceService;
  let httpMock : HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PriceService,
       
        
      ],
      imports:[
        HttpClientTestingModule,
        
      ]
    });
    service = TestBed.get(PriceService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: PriceService = TestBed.get(PriceService);
    expect(service).toBeTruthy();
  });

  it('should return a list of prices from API', () =>{
    const fakePrices: IPrice[]  = 
     [
      {id:1, priceAmount:665,tour_id:1,ticket_type_id:1},
     
    ];

    service.getPrices().subscribe(prices => {
      expect(prices.length).toBe(1);
      expect(prices).toEqual(fakePrices);
    });

    const request = httpMock.expectOne("https://er-citytourister.appspot.com"+'/price');
    expect(request.request.method).toBe("GET");
    request.flush(fakePrices);
  });
});
