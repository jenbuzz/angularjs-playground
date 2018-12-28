import { defaultState, textReducer } from './text.reducer';
import { Text } from './text.model';
import { EditText, IncrementTextCount, DecrementTextCount, ResetTextCount } from './text.actions';

describe('Text Reducer', () => {
    it('should return the default state if action is unknown', () => {
        const action = {type: 'default'} as any;
        const state = textReducer(undefined, action);
  
        expect(state).toBe(defaultState);
    });
  
    it('should execute EDIT_TEXT', () => {
        const newText = 'Qwerty';

        const testState: Text = {
            text: 'Wazzup',
            count: 0,
        };

        const action = new EditText(newText);
        const state = textReducer(testState, action);
  
        expect(state.text).toEqual(newText);
    });

    it('should execute INCREMENT_TEXT_COUNT', () => {
        const testState: Text = {
            text: 'Wazzup',
            count: 0,
        };

        const action = new IncrementTextCount();
        const state = textReducer(testState, action);
  
        expect(state.count).toEqual(1);
    });

    it('should execute DECREMENT_TEXT_COUNT', () => {
        const testState: Text = {
            text: 'Wazzup',
            count: 1,
        };

        const action = new DecrementTextCount();
        const state = textReducer(testState, action);
  
        expect(state.count).toEqual(0);
    });

    it('should execute RESET_TEXT_COUNT', () => {
        const testState: Text = {
            text: 'Wazzup',
            count: 1,
        };

        const action = new ResetTextCount();
        const state = textReducer(testState, action);
  
        expect(state.text).toEqual(defaultState.text);
        expect(state.count).toEqual(defaultState.count);
    });
});
