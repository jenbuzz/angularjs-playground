import { initialState, userReducer, State } from './user.reducer';
import { User } from './user.model';
import { UserActionTypes, LoadUser } from './user.actions';

describe('User Reducer', () => {
    it('should return the initial state if action is unknown', () => {
        const action = {type: 'default'} as any;
        const state = userReducer(undefined, action);
  
        expect(state).toBe(initialState);
    });

    it('should execute ' + UserActionTypes.LoadUser, () => {
        const testState: State = {
            selectedUserId: 'A1',
            ids: [],
            entities: null,
        };

        const testUser: User = {
            id: 'A1',
            name: 'User',
        };

        const action = new LoadUser(testUser);
        const state = userReducer(testState, action);
  
        expect(state.selectedUserId).toEqual('A1');
    });
});
