import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoService } from './integration-testing-demo/2-todos/todo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
