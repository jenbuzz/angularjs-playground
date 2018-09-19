import { Action } from '@ngrx/store';
import { User } from './user.model';

export enum UserActionTypes {
    LoadUser = '[User] Load User',
}

export class LoadUser implements Action {
  readonly type = UserActionTypes.LoadUser;

  constructor(public payload: User) {}
}

export type UserActionsUnion = LoadUser;
