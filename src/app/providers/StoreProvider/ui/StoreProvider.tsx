import { DeepPartial } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { stateSchema } from '../config/stateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<stateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState as stateSchema);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
