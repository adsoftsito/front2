import { TestBed, inject } from '@angular/core/testing';
import { AdminService } from './admin.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { IAdmin } from '../interfaces/admin';

describe('AdminService', () => {
  let service: AdminService;
  let httpMock : HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdminService
      ],
      imports:[
        HttpClientTestingModule,
        
      ]
    });
    service = TestBed.get(AdminService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([AdminService], (service: AdminService) => {
    expect(service).toBeTruthy();
  }));

  it('should have addAdmin function', inject([AdminService], (service: AdminService) => {
    expect(service.addAdmin).toBeTruthy();
  }));

  it('should have get admins function', inject([AdminService], (service: AdminService) => {
    expect(service.getAdmins).toBeTruthy();
  }));

  it('should have delete admin function', inject([AdminService], (service: AdminService) => {
    expect(service.deleteAdmin).toBeTruthy();
  }));

  it('should return a list of admins from API', () =>{
    const fakeAdmins: IAdmin[]  = 
     [
      {id:1, username:"Bego",email: "begomontes7@gmail.com", password: "123abc", connection_time:""},
      {id:2, username:"Juan",email: "Juan@gmail.com", password: "123abcd", connection_time:""}
    ];

    service.getAdmins().subscribe(admins => {
      expect(admins.length).toBe(2);
      expect(admins).toEqual(fakeAdmins);
    });

    const request = httpMock.expectOne("https://er-citytourister.appspot.com"+'/admin');
    expect(request.request.method).toBe("GET");
    request.flush(fakeAdmins);
  });
});
