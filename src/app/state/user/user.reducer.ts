import { ActionCreator, createReducer, on } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { User } from 'src/app/models/user.model';
import * as UserActions from './user.actions';

export interface UserState {
  users: ReadonlyArray<User>;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  loaded: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  // load users
  on(UserActions.loadUsers, (state) => ({ ...state, loading: true })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users,
  })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // add users

  on(UserActions.addUser, (state, { user }) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(UserActions.addUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...state.users, user],
  })),
  on(UserActions.addUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  })),

  // remove users

  on(UserActions.removeUser, (state, { id }) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(UserActions.removeUserSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: state.users.filter((a) => a.id !== id),
  })),
  on(UserActions.removeUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  }))
);
