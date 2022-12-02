import React from 'react'
import styled from 'styled-components';

interface StepperComponentProps {
    currentStep: number;
    totalSteps: number;
}
const StepperComponent = ({ currentStep, totalSteps }: StepperComponentProps) => {
    const stepConfig = [];
    for(let i=0;i <totalSteps; i++){
        stepConfig.push({isActive: currentStep > i});
    }
    return (
        <Parent>
            {stepConfig.map((item, index) => {
                return <Step key={index} isActive={item.isActive} />
            })}
        </Parent>
    )
}

export default StepperComponent

const Parent = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
`;

const Step = styled.div<{isActive: boolean}>`
    height: 8px;
    background: ${(props) => props.isActive ? '#E06358' : '#CCC4BA'};
    width: 100%;
    transform: rotate(-0.02deg);
`;