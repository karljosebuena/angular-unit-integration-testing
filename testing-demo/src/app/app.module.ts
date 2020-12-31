import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoService } from './integration-testing-demo/2-todos/todo.service';
import { HomeComponent } from './integration-testing-demo/home/home.component';
import { TodosComponent } from './integration-testing-demo/2-todos/todos.component';
import { UserDetailsComponent } from './integration-testing-demo/3-user-details/user-details.component';
import { VoterComponent } from './integration-testing-demo/1-voter/voter.component';
import { UsersComponent } from './integration-testing-demo/users/users.component';
import { HighlightDirective } from './integration-testing-demo/highlight.directive';
import { RouterModule } from '@angular/router';
import { routes } from './integration-testing-demo/app.routes';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
    HighlightDirective
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
