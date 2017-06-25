import { ActionReducer, Action } from '@ngrx/store';
import { User } from './user.model';

export const INIT_USERS = 'INIT_USERS';
export const UPDATE_USER = 'UPDATE_USER';

export function userReducer(state: User, action: Action) {
    switch (action.type) {
        case INIT_USERS:
            return Object.assign({}, state, action.payload);

        case UPDATE_USER:
            return state;

        default:
            return state;
    }
}