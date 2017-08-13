import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersService } from './users.service';
import { User } from './user.model';
import { INIT_USERS } from './user.reducer';

@Component({
    //moduleId: module.id+'',
    selector: 'manage',
    templateUrl: './manage.component.html'
})
export class ManageComponent implements OnInit {
    users: User[];

    constructor(private store: Store<any>, private usersService: UsersService) {}

    ngOnInit(): void {
        this.usersService.getUsers().subscribe(users => {
            this.users = users;
            this.store.dispatch({type: INIT_USERS, payload: this.users});
        });
    }
}
