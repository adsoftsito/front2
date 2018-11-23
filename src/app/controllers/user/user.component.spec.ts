import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../../services/user.service';
import { UserComponent } from './user.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('UserComponent', () => {
  // inicializacion del componente
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [
         UserComponent
    ],
    imports:[
      HttpClientTestingModule
    ],

      providers:[
        UserService
        
      
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    // nombre del test should create
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
