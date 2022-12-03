This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

# Clone this repo and start with below steps: 
install dependencies - ``yarn install``
start local dev server - ``yarn dev``

## Tech stack : 

  1. NextJS
  2. Material UI
  3. Styled components
 
## State Management:
  `` Context API + Reducer``

## Basic app overview architecture : 

![Screenshot 2022-12-03 at 3 24 11 PM](https://user-images.githubusercontent.com/41482800/205435169-f72f7b33-9315-4536-92cb-22bc93c975fb.png)

## Data Entiry for customer onboarding : 

```
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
    step: 1 | 2 | 3 | 4 | 5;
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
```

## Misc
1. Form validation is on high level, ``Next`` button will not get enabled until all fields are filled.
2. Entity ``UserType.addressLineTwo`` has been excluded from above restriction, since ``UserType.addressLineTwo`` can be enough in case of short address.


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


