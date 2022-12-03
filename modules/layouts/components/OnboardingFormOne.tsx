import React, { useContext } from 'react'
import styled from 'styled-components';
import Card from '../../../lib/Card';
import { UPDATE_PLAN_DETAILS, UPDATE_USER_DETAILS } from '../../../state/action';
import PlanDetail from './PlanDetail';
import BasicDetail from './BasicDetail';
import ApplicationContext from '../../../state/ApplicationContext';
interface OnboardingFormOneProps {
    name: string;
    policyAmount: number;
}
const OnboardingFormOne = ({ name, policyAmount }: OnboardingFormOneProps) => {
    const {data, dispatch} = useContext(ApplicationContext);

    const onInputHandler = (actionType: string, value: any) => {
        dispatch({ type: actionType, payload: value });
    }
    return (
        <Parent>
            <Heading>
                <Title>Choose your plan</Title>
                <Name>Hello {name},</Name>
                <Description>Increase yours and your family&apos;s  health insurance cover by <strong>₹{policyAmount} lakhs</strong> with Super top-up!</Description>
            </Heading>
            <Card title='Plan Details' content={<PlanDetail plan={data.plan} onInputHandler={(plan) => onInputHandler(UPDATE_PLAN_DETAILS, plan)} />} />
            <Card title='Basic Details(required)' content={<BasicDetail user={data?.user} onChangeHandler={(data) => onInputHandler(UPDATE_USER_DETAILS, data)} />} />
        </Parent>
    )
}

export default OnboardingFormOne

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

`;
const Title = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    color: #182639;

`;

const Name = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #2D3D54;
`;

const Description = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #2D3D54; 
`;

