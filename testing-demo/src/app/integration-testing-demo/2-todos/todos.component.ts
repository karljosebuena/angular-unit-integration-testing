import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: any[] = [];
  message;

  constructor(private service: TodoService) { }

  ngOnInit() {
    this.service.getTodos().subscribe(t => this.todos = t);
  }

  ngOnInitPromise() {
    this.service.getTodosPromise()
      .then(t => {
        this.todos = t
      })
      .catch(e => console.log(e))
  }

  add() {
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

  delete(id) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }
}
