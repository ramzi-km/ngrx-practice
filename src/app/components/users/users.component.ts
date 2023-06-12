import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import * as UserSelecter from 'src/app/state/user/user.selectors';
import * as UserActions from '../../state/user/user.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private store: Store) {}

  users$ = this.store.select(UserSelecter.selectUsers);
  loading$ = this.store.select(UserSelecter.selectLoading);
  loaded$ = this.store.select(UserSelecter.selectLoading);
  error$ = this.store.select(UserSelecter.selectError);

  ngOnInit(): void {
    this.store.dispatch(UserActions.loadUsers());
  }
  removeUser(id: number) {
    this.store.dispatch(UserActions.removeUser({ id }));
  }
  addUser() {
    const user: User = { id: 5, name: 'Johnny', email: 'jhn@gmail.com' };
    this.store.dispatch(UserActions.addUser({ user }));
  }
}
