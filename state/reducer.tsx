import { UPDATE_PLAN_DETAILS, UPDATE_USER_DETAILS, UPDATE_STEP } from "./action";

export type PlanType = {
    id: string;
    category: 'ONE' | 'PRO' | 'PLUS' | 'MAX';
    displayCategory: string,
    displayText: string;
    type: 'SELF' | 'PARENTS' | 'SELF_PARENTS' | 'SELF_SPOUSE_KIDS';
    amount: number;
}
export type UserType = {
    email: string;
    phone: string;
    addressLineOne: string;
    addressLineTwo: string;
    pinCode: string;
    state: string;
}
export type OnboardingDataTypes = {
    step: 1 | 2 | 3 | 4;
    plan: PlanType;
    user: UserType;
}

export const applicationReducerInitialState: OnboardingDataTypes = {
    step: 1,
    plan: {
        id: Math.random().toFixed(10).toString(),
        category: 'ONE',
        displayCategory: 'One(individual)',
        displayText: '',
        type: 'SELF',
        amount: 600,
    },
    user: {
        email: '',
        phone: '',
        addressLineOne:'',
        addressLineTwo: '',
        pinCode: '',
        state: '',
    }
}

const ApplicationReducer = (state: OnboardingDataTypes = applicationReducerInitialState, action: any) => {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_PLAN_DETAILS: {
            return {
                ...state,
                plan: payload,
            }
        }
        case UPDATE_USER_DETAILS: {
            return {
                ...state,
                user: payload,
            }
        }
        case UPDATE_STEP: {
            return {
                ...state,
                step: payload,
            }
        }
    }
}

export default ApplicationReducer;