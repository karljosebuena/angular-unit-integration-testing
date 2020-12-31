/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpModule } from '@angular/http';
import { from } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [TodosComponent],
      providers: [TodoService]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load todos from the server', () => {
    const response = [1, 2, 3];
    const service = TestBed.get(TodoService);
    spyOn(service, 'getTodos').and.returnValue(
      from([response])
    );

    fixture.detectChanges();

    expect(component.todos).toBe(response);
  });
});
