import * as TextActions from './text.actions';
import { Text } from './text.model';

export type Action = TextActions.All;

export const defaultState: Text = {
    text: 'Hello World!',
    count: 0,
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

export function textReducer(state: Text = defaultState, action: Action) {
	switch (action.type) {
  		case TextActions.EDIT_TEXT:
  			return newState(state, {
                text: action.payload
            });

        case TextActions.INCREMENT_TEXT_COUNT:
            return newState(state, {
                count: state.count + 1
            });

        case TextActions.DECREMENT_TEXT_COUNT:
  			return newState(state, {
                count: state.count - 1
            });

        case TextActions.RESET_TEXT_COUNT:
  			return defaultState;

  		default:
  			return state;
	}
}
