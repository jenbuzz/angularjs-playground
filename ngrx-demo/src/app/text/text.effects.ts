import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as textActions from './text.actions';
export type Action = textActions.All;

@Injectable()
export class TextEffects {
    constructor(private actions$: Actions) {}

    @Effect()
    editTextUpdate$: Observable<Action> = this.actions$.pipe(
        ofType(textActions.EDIT_TEXT),
        map((action: textActions.EditText) => action.payload),
        map((text: string) => new textActions.IncrementTextCount())
    );
}
