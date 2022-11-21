import { counterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface stateSchema {
    counter: counterSchema;
    user: UserSchema
}
