import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

// load users
export const loadUsers = createAction('[User Component]loadUsers');
export const loadUsersSuccess = createAction(
  '[User Component] loadUsersSuccess',
  props<{ users: readonly User[] }>()
);
export const loadUsersFailure = createAction(
  '[User Component] loadUsersFailure',
  props<{ error: any }>()
);

// add user

export const addUser = createAction(
  '[User Component] addUser',
  props<{ user: User }>()
);
export const addUserSuccess = createAction(
  '[User Component] addUserSuccess',
  props<{ user: User }>()
);
export const addUserFailure = createAction(
  '[User Component] addUserFailure',
  props<{ error: any }>()
);

// remove user

export const removeUser = createAction(
  '[User Component] removeUser',
  props<{ id: number }>()
);
export const removeUserSuccess = createAction(
  '[User Component] removeUserSuccess',
  props<{ id: number }>()
);
export const removeUserFailure = createAction(
  '[User Component] removeUserFailure',
  props<{ error: any }>()
);
