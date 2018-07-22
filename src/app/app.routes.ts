import { UserDetailsComponent } from './integration-tests/3-user-details/user-details.component';
import { UsersComponent } from './integration-tests/users/users.component';
import { TodosComponent } from './integration-tests/2-todos/todos.component';
import { HomeComponent } from './integration-tests/home/home.component';

export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', component: HomeComponent },
];
