import { createContext, Dispatch } from 'react';
import {OnboardingDataTypes, applicationReducerInitialState} from './reducer';
export interface ContextState {
    data: OnboardingDataTypes;
    dispatch: any;
}

export const contextInitialState: ContextState = {
    data: applicationReducerInitialState,
    dispatch: {},
}
 const ApplicationContext = createContext<ContextState>(contextInitialState);

export default ApplicationContext;