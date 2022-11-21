import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('toHaveTextContent', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 1 },
            },
        });
        expect(screen.getByTestId('counterValue')).toHaveTextContent('1');
    });
    test('increment', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 1 },
            },
        });
        fireEvent.click(screen.getByTestId('incrementButton'));
        expect(screen.getByTestId('counterValue')).toHaveTextContent('2');
    });
    test('with only first param', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: { value: 1 },
            },
        });
        fireEvent.click(screen.getByTestId('decrementButton'));
        expect(screen.getByTestId('counterValue')).toHaveTextContent('0');
    });
});
