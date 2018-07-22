/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';

// NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not
// provided the TodoService as a dependency to TodosComponent.
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below.

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [TodosComponent],
      providers: [TodoService]
    });

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all todos from the server', fakeAsync(() => {
    const service = fixture.debugElement.injector.get(TodoService);
    // let service = TestBed.get(TodoService);
    spyOn(service, 'getTodosPromise').and.returnValue(Observable.from([[1, 2, 3]]));
    fixture.detectChanges();
    console.log('EXPECT WAS CALLED');

    tick();
    expect(component.todos.length).toBe(3);

    // fixture.whenStable().then(() => {
    // });
  }));
});
