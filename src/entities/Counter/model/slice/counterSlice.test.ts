import { DeepPartial } from '@reduxjs/toolkit';
import { counterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
    test('decrement', () => {
        const state: DeepPartial<counterSchema> = {
            value: 1,
        };
        expect(
            counterReducer(state as counterSchema, counterActions.decrement()),
        ).toEqual({ value: 0 });
    });
    test('increment', () => {
        const state: DeepPartial<counterSchema> = {
            value: 1,
        };
        expect(
            counterReducer(state as counterSchema, counterActions.increment()),
        ).toEqual({ value: 2 });
    });
    test('empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment()),
        ).toEqual({ value: 1 });
    });
});
