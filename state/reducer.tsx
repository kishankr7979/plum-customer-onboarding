import { UPDATE_PLAN_DETAILS, UPDATE_USER_DETAILS, UPDATE_STEP, UPDATE_DECLARATION, UPDATE_DEDUCTIBLE_DECLARATION, UPDATE_DEDUCTIBLE_AMOUNT } from "./action";

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
    deductibleAmount: number;
    deductibleUndertaking: boolean;
    declaration: {
        declarationFirst: boolean;
        declarationSecond: boolean;
        declarationThird: boolean;
        declarationFour: boolean;
    }
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
    },
    deductibleAmount: 200000,
    deductibleUndertaking: false,
    declaration: {
        declarationFirst: false,
        declarationSecond: false,
        declarationThird: false,
        declarationFour: false,
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
        case UPDATE_DEDUCTIBLE_DECLARATION: {
            return {
                ...state,
                deductibleUndertaking: payload,
            }
        }
        case UPDATE_DECLARATION: {
            return {
                ...state,
                declaration: payload,
            }
        }
        case UPDATE_DEDUCTIBLE_AMOUNT: {
            return {
                ...state,
                deductibleAmount: payload,
            }
        }
    }
}

export default ApplicationReducer;