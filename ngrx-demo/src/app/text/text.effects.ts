import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';

import * as textActions from './text.actions';
export type Action = textActions.All;

@Injectable()
export class TextEffects {
    constructor(private actions$: Actions) {}

    @Effect()
    editTextUpdate$: Observable<Action> = this.actions$.ofType(textActions.EDIT_TEXT).pipe(
        map((action: textActions.EditText) => action.payload),
        map((text: string) => new textActions.IncrementTextCount())
    );
}