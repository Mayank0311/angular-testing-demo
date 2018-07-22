/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { Observable, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

class RouterStub {
  navigate() { }
}

class ActivatedRouteStub {
  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }
  // params: Observable<any> = Observable.empty();
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        {
          provide: Router, useClass: RouterStub
        },
        {
          provide: ActivatedRoute, useClass: ActivatedRouteStub
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should navigate to users page after saving', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('should navigate users to not-found page when an invalid user id is passed', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    let activatedRoute: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    activatedRoute.push({ id: 0 });

    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
