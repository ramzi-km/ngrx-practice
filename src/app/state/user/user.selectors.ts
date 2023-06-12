import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('userState');

// here we are getting the users[]
export const selectUsers = createSelector(
  selectUserState,
  (state) => state.users
);

// lets fetch the loading here

export const selectLoading = createSelector(
  selectUserState,
  (state) => state.loading
);

// lets fetch the loaded here

export const selectLoaded = createSelector(
  selectUserState,
  (state) => state.loaded
);

// lets fetch the error here

export const selectError = createSelector(
  selectUserState,
  (state) => state.error
);
