/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="counterValue">value = {counterValue}</h1>
            <Button data-testid="incrementButton" onClick={increment}>increment</Button>
            <Button data-testid="decrementButton" onClick={decrement}>decrement</Button>
        </div>
    );
};
