import {
    UserActionTypes,
    LoadUser,
} from './user.actions';
import { User } from './user.model';

describe('User Actions', () => {
    const user: User = {
        id: 'A1',
        name: 'User',
    };

    describe(UserActionTypes.LoadUser, () => {
        it('should create an LoadUser action', () => {
            const action = new LoadUser(user);

            expect({...action}).toEqual({
                type: UserActionTypes.LoadUser,
                payload: user,
            });
        });
    });
});
