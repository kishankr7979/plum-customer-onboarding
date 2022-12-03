import React from 'react'
import styled from 'styled-components';
import { useContext } from 'react';
import ApplicationContext from '../../../state/ApplicationContext';
import Card from '../../../lib/Card';
import BackButton from '../../../lib/BackButton';
interface ReviewProps {
    onBackClick: () => void;
}
const Review = ({ onBackClick }: ReviewProps) => {
    const { data, dispatch } = useContext(ApplicationContext);
    const cardContents = (
        <Data>
            <div className="data-items">
                <span className="key">
                    Plan Selected
                </span>
                <span className="value">
                    {data?.plan?.displayText}
                </span>
            </div>
            <div className="data-items">
                <span className="key">
                    Mobile Number
                </span>
                <span className="value">
                    {data?.user?.phone}
                </span>
            </div>
            <div className="data-items">
                <span className="key">
                    Address line 01
                </span>
                <span className="value">
                    {data?.user?.addressLineOne}
                </span>
            </div>
            <div className="data-items">
                <span className="key">
                    Pincode
                </span>
                <span className="value">
                    {data?.user?.pinCode}
                </span>
            </div>
            <div className="data-items">
                <span className="key">
                   State
                </span>
                <span className="value">
                    {data?.user?.state}
                </span>
            </div>
        </Data>
    )
    return (
        <Parent>
            <Heading>
                <div className="header">
                    {data?.step === 4 && <BackButton onButtonClick={onBackClick} />}
                    <div className='title'>
                        <Title>{data?.step === 4 ? 'Review and confirm payment' : 'Congratulations!'}</Title>
                    </div>
                </div>
            </Heading>
            <Card content={cardContents} variant={4} />
        </Parent>
    )
}

export default Review

const Parent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
`;

const Title = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;

`;
const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    .header {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    .title {
        display: flex;
        flex-direction: column;
        gap: 12px;
        
    }

`;
const Data = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    width: 100%;
    .data-items {
        display: flex;
        gap: 3rem;
        width: 50%;
        flex-wrap: nowrap;
        align-items: center;
        .key {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 132%;
            color: #55657D;
            width: 30%;
        }
        .value {
            text-align: center;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 16px
            color: #182639;

        }
    }
`;