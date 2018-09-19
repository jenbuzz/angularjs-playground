import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from './user.model';
import { UserActionsUnion, UserActionTypes } from './user.actions';

export interface State extends EntityState<User> {
    selectedUserId: string | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: (user: User) => user.id,
    sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
    selectedUserId: null,
});

export function userReducer(state = initialState, action: UserActionsUnion): State {
    switch (action.type) {  
        case UserActionTypes.LoadUser: {
            console.log('load user');
            return adapter.addOne(action.payload, state);
        }

        default: {
            return state;
        }
    }
}
  
export const getSelectedId = (state: State) => state.selectedUserId;
