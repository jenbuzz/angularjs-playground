import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREMENT, DECREMENT, RESET } from './counter.reducer';

interface AppState {
    count: number;
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {

    count$: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.count$ = store.pipe(select('count'));
    }

    increment() {
        this.store.dispatch({ type: INCREMENT });
    }

    decrement() {
        this.store.dispatch({ type: DECREMENT });
    }

    reset() {
        this.store.dispatch({ type: RESET });
    }

}
