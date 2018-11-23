import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { IPurchase } from '../interfaces/purchase';
import { PurchaseService } from './purchase.service';

describe('PurchaseService', () => {
  let service: PurchaseService;
  let httpMock : HttpTestingController;
  beforeEach(() =>{
    TestBed.configureTestingModule({
      providers: [
        PurchaseService,
       
        
      ],
      imports:[
        HttpClientTestingModule,
        
      ]
    });
    service = TestBed.get(PurchaseService);
    httpMock = TestBed.get(HttpTestingController);
  }); 

  it('should be created', () => {
    const service: PurchaseService = TestBed.get(PurchaseService);
    expect(service).toBeTruthy();
  });

  it('should return a list of purchases from API', () =>{
    const fakePurchases: IPurchase[]  = 
     [
      {id:1, sub_total:113, total:456,user_id:1, company_id:1,tickets:[]},
     
    ];

    service.getPurchases().subscribe(purchases => {
      expect(purchases.length).toBe(1);
      expect(purchases).toEqual(fakePurchases);
    });

    const request = httpMock.expectOne("https://er-citytourister.appspot.com"+'/purchase');
    expect(request.request.method).toBe("GET");
    request.flush(fakePurchases);
  });
});
