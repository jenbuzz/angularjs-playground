import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UsersService {
    dummyData: User[] = [
        {'id': 1, 'name': 'User 1', 'email': 'user1@user.net', 'phone': '12121212', 'mobile': '21212121', 'facebook': 'user1'},
        {'id': 2, 'name': 'User 2', 'email': 'user2@user.net', 'phone': '34343434', 'mobile': '43434343', 'facebook': 'user2'},
        {'id': 3, 'name': 'User 3', 'email': 'user3@user.net', 'phone': '56565656', 'mobile': '65656565', 'facebook': 'user3'}
    ];

    getUsers(): Observable<Array<User>> {
        return Observable.of(this.dummyData);
    }

    getUser(id: number): Observable<User> {
        return Observable.of(this.dummyData[id-1]);
    }
}
