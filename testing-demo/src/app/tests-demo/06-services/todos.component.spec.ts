import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import {
  from,
  empty,
  throwError
} from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos properties with the ites returned from the server', () => {
    const todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return from([todos])
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });

  it('should the server to save changes when a new todo is added', () => {
    const spy = spyOn(service, 'add').and.callFake(() => {
      return empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todo returned from the server', () => {
    const newTodo = { name: 'code' };
    spyOn(service, 'add').and.returnValue(from([newTodo]));

    component.add();

    expect(component.todos).toContain(newTodo);
  });

  it('should set message property if server returns error in adding new todo', () => {
    const errorMsg = 'Server Error: Adding todo.'
    spyOn(service, 'add').and.returnValue(throwError(errorMsg));

    component.add();

    expect(component.message).toBe(errorMsg);
  });

  it('should call the server to delete todo item if the user confirms', () => {
    const confirmSpy = spyOn(window, 'confirm').and.returnValue(true);
    const deleteSpy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(confirmSpy).toHaveBeenCalled();
    expect(deleteSpy).toHaveBeenCalledWith(1);

  });

  it('should NOT call the server to delete todo item if the user cancels', () => {
    const confirmSpy = spyOn(window, 'confirm').and.returnValue(false);
    const deleteSpy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(confirmSpy).toHaveBeenCalled();
    expect(deleteSpy).not.toHaveBeenCalled();

  });
});