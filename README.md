This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

# Clone this repo and start with below steps: 
install dependencies - ``yarn install``
start local dev server - ``yarn dev``

## Tech stack : 

  1. NextJS
  2. Material UI
  3. Styled componets
 
## State Management:
  `` Context API + Reducer``

## Basic app overview archicture : 

![Screenshot 2022-12-03 at 3 24 11 PM](https://user-images.githubusercontent.com/41482800/205435169-f72f7b33-9315-4536-92cb-22bc93c975fb.png)

## Data Entiry for customer onboardin : 
<p> export type PlanType = {
    id: string;
    category: 'ONE' | 'PRO' | 'PLUS' | 'MAX';
    displayCategory: string,
    displayText: string;
    type: 'SELF' | 'PARENTS' | 'SELF_PARENTS' | 'SELF_SPOUSE_KIDS';
    amount: number;
}</p>
<p>export type UserType = {
    email: string;
    phone: string;
    addressLineOne: string;
    addressLineTwo: string;
    pinCode: string;
    state: string;
}</p>
<p>export type OnboardingDataTypes = {
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
</p>

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


