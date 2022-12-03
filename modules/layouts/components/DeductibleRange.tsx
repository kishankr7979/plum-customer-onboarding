import React, {useContext} from 'react'
import styled from 'styled-components';
import { Slider, Box } from '@mui/material';
import { UPDATE_DEDUCTIBLE_AMOUNT } from '../../../state/action';
import ApplicationContext from '../../../state/ApplicationContext';
const DEDUCTIBLE_RANGE = [
    {
        value: 100000,
        label: '₹1L'
    },
    {
        value: 200000,
        label: '₹2L'
    },
    {
        value: 300000,
        label: '₹3L'
    },
    {
        value: 500000,
        label: '₹5L'
    }
]
interface DeductibleRangeProps {
    policyAmount: number;
}
const DeductibleRange = ({ policyAmount}: DeductibleRangeProps) => {
    const {data, dispatch} = useContext(ApplicationContext);
    function valuetext(value: number) {
        return `${value}L`
    }
    const onChange = (value: number) => {
        dispatch({type: UPDATE_DEDUCTIBLE_AMOUNT, payload: value})
    }
    return (
        <Parent>
            <Title>
                Sum insured of ₹{policyAmount} with a deductible of ₹{data.deductibleAmount}
            </Title>
            <Box sx={{ width: '100%' }}>
            <Slider
                min={0}
                aria-label="Always visible"
                defaultValue={data.deductibleAmount}
                onChange={(event) => onChange(event?.target?.value as number)}
                getAriaValueText={valuetext}
                step={1}
                marks={DEDUCTIBLE_RANGE}
                valueLabelDisplay="on"
                max={500000}
                sx={{color: '#D44C46'}}
            />
            </Box> 
        </Parent>
    )
}

export default DeductibleRange


const Parent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

const Title = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 132%;
    color: #2D3D54;

`;