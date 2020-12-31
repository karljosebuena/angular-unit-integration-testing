/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, empty } from 'rxjs';

class RouterStub {
  navigate(params) {
  }
}

class ActivatedRouteStub {
  params: Observable<any> = empty();
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
      ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the user to the users page after saving', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.save();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledOnceWith(['users']);
  });
});
