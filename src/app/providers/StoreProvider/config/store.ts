import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { stateSchema } from './stateSchema';

export function createReduxStore(initialState?: stateSchema) {
    const rootReducer: ReducersMapObject<stateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };
    return configureStore<stateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
