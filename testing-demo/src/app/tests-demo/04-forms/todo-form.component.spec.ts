import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder);
  });

  it('should create a form with 2 form controls', () => {
    expect(component.form.contains('name')).toBe(true);
    expect(component.form.contains('email')).toBeTruthy()
  });

  it('should make the name control required', () => {
    const control = component.form.controls.name;

    control.setValue('');

    expect(control.valid).toBeFalsy();
  });
});