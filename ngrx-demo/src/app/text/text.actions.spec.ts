import {
    EDIT_TEXT,
    EditText,
    INCREMENT_TEXT_COUNT,
    IncrementTextCount,
    DECREMENT_TEXT_COUNT,
    DecrementTextCount,
    RESET_TEXT_COUNT,
    ResetTextCount,
} from './text.actions';

describe('Text Actions', () => {  
    describe('EDIT_TEXT', () => {
        it('should create an EditText action', () => {
            const action = new EditText('');
    
            expect({...action}).toEqual({
                type: EDIT_TEXT,
                payload: '',
            });
        });
    });

    describe('INCREMENT_TEXT_COUNT', () => {
        it('should create an IncrementTextCount action', () => {
            const action = new IncrementTextCount();
    
            expect({...action}).toEqual({
                type: INCREMENT_TEXT_COUNT,
            });
        });
    });

    describe('DECREMENT_TEXT_COUNT', () => {
        it('should create an DecrementTextCount action', () => {
            const action = new DecrementTextCount();
    
            expect({...action}).toEqual({
                type: DECREMENT_TEXT_COUNT,
            });
        });
    });

    describe('RESET_TEXT_COUNT', () => {
        it('should create an ResetTextCount action', () => {
            const action = new ResetTextCount();
    
            expect({...action}).toEqual({
                type: RESET_TEXT_COUNT,
            });
        });
    });
});
