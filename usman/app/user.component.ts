import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from './users.service';
import { User } from './user.model';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id+'',
    selector: 'user',
    templateUrl: './user.component.html'
})
export class UserComponent {
    user: User;

    constructor(private route: ActivatedRoute, private usersService: UsersService) {
        this.route.params.switchMap((params: Params) => this.usersService.getUser(+params['id'])).subscribe((user: User) => this.user = user);
    }

    saveUser(user: User): void {
        console.log('save');
        console.log(user);
    }

    deleteUser(user: User): void {
        console.log('delete');
        console.log(user);
    }
}
