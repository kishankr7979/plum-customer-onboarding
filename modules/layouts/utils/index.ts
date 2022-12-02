import { PlanType } from "../../../state/reducer";


/*

  id: string;
    category: 'ONE' | 'PRO' | 'PLUS' | 'MAX';
        displayCategory: string;
    displayText: string;
    type: 'SELF' | 'PARENTS' | 'SELF_PARENTS' | 'SELF_SPOUSE_KIDS';
    amount: number;


*/
export const planList: PlanType[] = [
    {
        id: 'plan-a',
        category: 'ONE',
        displayCategory: 'One(Individual)',
        displayText: 'Self',
        type: 'SELF',
        amount: 600,

    },
    {
        id: 'plan-b',
        category: 'PRO',
        displayCategory: 'Pro(Individual)',
        displayText: 'Parent',
        type: 'PARENTS',
        amount: 0,

    },
    {
        id: 'plan-c',
        category: 'PLUS',
        displayCategory: 'Plus(Individual + Individual)',
        displayText: 'Self + Parents',
        type: 'SELF_PARENTS',
        amount: 600,

    },
    {
        id: 'plan-d',
        category: 'MAX',
        displayCategory: 'Max(Floater)',
        displayText: 'Self + Spouse + Kids',
        type: 'SELF_SPOUSE_KIDS',
        amount: 1800,

    },

]

export const imagesMap = (category: 'ONE' | 'PRO' | 'PLUS' | 'MAX') => {
    let list = {
        'ONE': '/images/ONE.svg',
        'PRO': '/images/PRO.svg',
        'PLUS': '/images/PLUS.svg',
        'MAX': '/images/MAX.svg',
    }
    return list[category];
}