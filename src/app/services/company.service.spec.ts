import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { CompanyService } from './company.service';
import { ICompany } from '../interfaces/company';
describe('CompanyService', () => {
  let service: CompanyService;
  let httpMock : HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
        providers:[CompanyService],
        imports:[HttpClientTestingModule]
  });
    
  service = TestBed.get(CompanyService);
  httpMock = TestBed.get(HttpTestingController);
    
  });


  it('should be created', () => {
    const service: CompanyService = TestBed.get(CompanyService);
    expect(service).toBeTruthy();
  });

  it('should return a list of companiesfrom API', () =>{
    const fakeCompanies: ICompany[]  = 
     [
      {id:1, name:"Estrella Roja",full_name: "Estrella Roja Company",phone_number:"9512287161", address:"Una direccion",postal_code:"656",rfc:"56565",ieps:6,iva:15}
      
    ];

    service.getCompanies().subscribe(admins => {
      expect(admins.length).toBe(1);
      expect(admins).toEqual(fakeCompanies);
    });

    const request = httpMock.expectOne("https://er-citytourister.appspot.com"+'/company');
    expect(request.request.method).toBe("GET");
    request.flush(fakeCompanies);
  });
});
