import { Checkbox } from '@mui/material';
import React, { useContext } from 'react'
import styled from 'styled-components';
import BackButton from '../../../lib/BackButton';
import { OnboardingDataTypes } from '../../../state/reducer';
import { UPDATE_DECLARATION } from '../../../state/action';
import ApplicationContext from '../../../state/ApplicationContext';
interface DeclarationProps {
    onBackClick: () => void;
}
const Declaration = ({ onBackClick }: DeclarationProps) => {
    const {data, dispatch} = useContext(ApplicationContext);
    const DeclarationConfig = [
        {
            id: 1,
            checked: data?.declaration?.declarationFirst,
            onChange: (event: boolean) => dispatch({type: UPDATE_DECLARATION, payload:{ ...data?.declaration, declarationFirst: event} }),
            title: 'I hereby declare that none of the proposed members are habitual consumers of alcohol, tobacco, gutka or any recreational drugs.'
        },
        {
            id: 2,
            checked: data?.declaration?.declarationSecond,
            onChange: (event: boolean) => dispatch({type: UPDATE_DECLARATION, payload:{ ...data?.declaration, declarationSecond: event} }),
            title: 'I hereby declare that all proposed members are in good health and entirely free from any mental pf physical impairements or deformities, disease/condition.'
        },
        {
            id: 3,
            checked: data?.declaration?.declarationThird,
            onChange: (event: boolean) => dispatch({type: UPDATE_DECLARATION, payload:{ ...data?.declaration, declarationThird: event} }),
            title: 'I have understood that there is 30 days waiting period for all diseases and 2 years on named ailments. (list of named ailements)'
        },
        {
            id: 4,
            checked: data?.declaration?.declarationFour,
            onChange: (event: boolean) => dispatch({type: UPDATE_DECLARATION, payload:{ ...data?.declaration, declarationFour: event} }),
            title: "I understand that this policy doesn't cover Pre-existing diseases."
        }
    ]
    return (
        <Parent>
            <Heading>
                <div className="header">
                    <BackButton onButtonClick={onBackClick} />
                    <div className='title'>
                        <Title>Declaration</Title>
                    </div>
                </div>
            </Heading>

            {DeclarationConfig.map((item) => {
                return (
                    <Undertaking key={item.id}>
                        <Checkbox checked={item.checked} sx={{
                            '&.Mui-checked': {
                                color: '#E06358',
                            },
                        }}
                            onChange={(event) => item.onChange(event.target.checked)}
                        />
                        <Text>{item.title}</Text>
                    </Undertaking>
                );
            })}
        </Parent>
    )
}

export default Declaration;
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
        align-items: center;
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