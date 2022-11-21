import { DeepPartial } from '@reduxjs/toolkit';
import { stateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('should return counter value', () => {
        const state: DeepPartial<stateSchema> = {
            counter: { value: 1 },
        };
        expect(getCounterValue(state as stateSchema)).toEqual(1);
    });
});
