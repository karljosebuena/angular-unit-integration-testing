import { HomeComponent } from '../app/integration-testing-demo/home/home.component';
import { TodosComponent } from '../app/integration-testing-demo/2-todos/todos.component';
import { UsersComponent } from '../app/integration-testing-demo/users/users.component';
import { UserDetailsComponent } from '../app/integration-testing-demo/3-user-details/user-details.component';

export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', component: HomeComponent },
];