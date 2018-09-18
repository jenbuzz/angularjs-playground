import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Text } from './text.model';
import * as TextActions from './text.actions';


interface AppState {
    text: Text;
}

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
})
export class TextComponent {

    text: Observable<Text>;
    strText: string;

    constructor(private store: Store<AppState>) {
        this.text = this.store.select('text');
    }

    editText() {
        this.store.dispatch(new TextActions.EditText(this.strText));
    }

    increment() {
        this.store.dispatch(new TextActions.IncrementTextCount());
    }

    decrement() {
        this.store.dispatch(new TextActions.DecrementTextCount());
    }

    reset() {
        this.store.dispatch(new TextActions.ResetTextCount());
    }

}
