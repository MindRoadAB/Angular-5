import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable, of } from 'rxjs';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: Partial<UserService>;

  beforeEach(async(() => {
    let userServiceStub = {
      users: [
        {
          id: 2,
          name: "Emil",
          email: "emil@foo.com"
        }
      ],
      getUsers(): Observable<User[]> {
        return of(this.users);
      },
      createUser(user: User): Observable<User> {
        this.users.push(user);
        return of(user);
      }
    };

    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [ FormsModule, HttpClientModule ],
      providers: [
        { provide: UserService, useValue: userServiceStub }
      ]
    })
    .compileComponents();

    userService = TestBed.get(UserService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should render a row in the table`, async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('td')[0].textContent).toContain('2');
    expect(compiled.querySelectorAll('td')[1].textContent).toContain('Emil');
    expect(compiled.querySelectorAll('td')[2].textContent).toContain('emil@foo.com');
  }));
  it(`should create user`, async(() => {
    component.userEmail = "patrik@foo.com";
    component.userName = "Patrik";
    component.userId = 3;
    component.createUser();
    fixture.detectChanges();

    userService.getUsers()
      .subscribe(users => {
        expect(users.length).toEqual(2);
      });
  }));
});
