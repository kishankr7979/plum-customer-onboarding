import React, { useContext } from 'react'
import styled from 'styled-components';
import Card from '../../../lib/Card';
import { Checkbox } from '@mui/material';
import { OnboardingDataTypes } from '../../../state/reducer';
import { UPDATE_DEDUCTIBLE_DECLARATION } from '../../../state/action';
import Image from 'next/image';
import { planList, imagesMap } from '../utils';
import BackButton from '../../../lib/BackButton';
import DeductibleRange from './DeductibleRange';
import ApplicationContext from '../../../state/ApplicationContext';
interface OnboardingFormTwoProps {
    name: string;
    policyAmount: number;
    onBackClick: () => void;
}
const OnboardingFormTwo = ({ name, policyAmount, onBackClick }: OnboardingFormTwoProps) => {
    const {data, dispatch} = useContext(ApplicationContext);
    const onCheckedHandler = (event: boolean) => {
        dispatch({ type: UPDATE_DEDUCTIBLE_DECLARATION, payload: event })
    }
    const cardTitle = (
        <CardTitle>
            <span>{data.plan.displayText}</span>
            <div className='icon-name'>
                <Image src={imagesMap(data.plan.category)} height='28' width='28' alt='icon' />
                <Name>John Doe</Name>
            </div>
        </CardTitle>
    )
    return (
        <Parent>
            <Heading>
                <div className="header">
                    <BackButton onButtonClick={onBackClick} />
                    <div className='title'>
                        <Title>Select your deductible amount</Title>
                        <Description>Select the deductible amount for the policy (or policies) below.
                            <a href="https://www.plumhq.com/terms" style={{textDecoration: 'underlined'}} target="_blank" rel="noreferrer">(what is a deductible?) </a></Description>
                    </div>
                </div>
            </Heading>
            <Card title={cardTitle} content={<DeductibleRange policyAmount={policyAmount} value={data?.deductibleAmount} dispatch={dispatch} />} variant={3} />
            <Undertaking>
                <Checkbox checked={data?.deductibleUndertaking} sx={{
                    '&.Mui-checked': {
                        color: '#E06358',
                    },
                }} onChange={(event) => onCheckedHandler(event.target.checked)} />
                <Text>I understand that this insurance will not be utilized until ₹{new Intl.NumberFormat('en-IN').format(data?.deductibleAmount)} (deductible) is exhausted.</Text>
            </Undertaking>
        </Parent>
    )
}

export default OnboardingFormTwo;

const Parent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    .header {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
    }
    .title {
        display: flex;
        flex-direction: column;
        gap: 12px;
        
    }

`;
const Title = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;


    color: #182639;


`;


const Description = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #2D3D54; 
`;


const CardTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    .icon-name {
        display: flex;
        gap: 6px;
        align-items: center;
    }

`;

const Name = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 130%;

    color: #000A26;

`;

const Undertaking = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;

`;

const Text = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    color: #2D3D54;

`;