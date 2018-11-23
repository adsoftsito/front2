import { TestBed, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { IUser } from '../interfaces/user';

describe('UserService', () => {
  let service: UserService;
  let httpMock : HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
       
        
      ],
      imports:[
        HttpClientTestingModule,
        
      ]
    });
    service = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should return a list of users from API', () =>{
    const fakeUsers: IUser[]  = 
     [
      {id:1, name:"Bego",email: "begomontes7@gmail.com", password: "123abc", phone_number:""},
     
    ];

    service.getUsuarios().subscribe(users => {
      expect(users.length).toBe(1);
      expect(users).toEqual(fakeUsers);
    });

    const request = httpMock.expectOne("https://er-citytourister.appspot.com"+'/user');
    expect(request.request.method).toBe("GET");
    request.flush(fakeUsers);
  });
});
