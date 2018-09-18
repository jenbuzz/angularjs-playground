import { Action } from '@ngrx/store';

export const EDIT_TEXT = '[Text] Edit';
export const INCREMENT_TEXT_COUNT = '[Text] Increment';
export const DECREMENT_TEXT_COUNT = '[Text] Decrement';
export const RESET_TEXT_COUNT = '[Text] Reset';

export class EditText implements Action {
    readonly type = EDIT_TEXT;

    constructor(public payload: string) {}
}

export class IncrementTextCount implements Action {
    readonly type = INCREMENT_TEXT_COUNT;
}

export class DecrementTextCount implements Action {
    readonly type = DECREMENT_TEXT_COUNT;
}

export class ResetTextCount implements Action {
    readonly type = RESET_TEXT_COUNT;
}

export type All
    = EditText
    | IncrementTextCount
    | DecrementTextCount
    | ResetTextCount;
