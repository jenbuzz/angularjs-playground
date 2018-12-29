import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class FamilyService {

    private messageSource = new BehaviorSubject('');
    currentMessage = this.messageSource.asObservable();

    changeMessage(message: string) {
        this.messageSource.next(message);
    }

    getCurrentMessage(): Observable<string> {
        return this.currentMessage;
    }

}
