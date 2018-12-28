import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './user.model';
import * as UserActions from './user.actions';

interface AppState {
    user: User;
}

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
})
export class UserComponent {

    user: User;

    constructor(private store: Store<AppState>) {
        this.user = {
            id: 'testId',
            name: 'testName',
        };
    }

    loadUser() {
        this.store.dispatch(new UserActions.LoadUser(this.user));
    }

}
