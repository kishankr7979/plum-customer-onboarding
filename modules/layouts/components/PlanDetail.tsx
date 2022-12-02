import React from 'react'
import styled from 'styled-components';
import { TextField, InputLabel, MenuItem, FormControl } from '@mui/material';
import { OnboardingDataTypes } from '../../../state/reducer';
import { planList, imagesMap } from '../utils';
import Image from 'next/image';
interface PlanDetailProps {
    plan: OnboardingDataTypes['plan'];
    onInputHandler: (value: any) => void;
}
const PlanDetail = ({plan, onInputHandler}: PlanDetailProps) => {
  return (
    <PlanDetails>
            <span>Your plan type</span>
            <TextField
                select
                required
                fullWidth
                value={plan?.displayText}
                placeholder="select your plan"
                className='select-input'
            >
                {planList.map((item, index) => {
                    return (
                        <MenuItem key={item.id} value={item?.displayText} onClick={() => onInputHandler(item)}>
                            <div className='plan-menu-item'>
                                <span>{item.displayCategory}</span>
                                <div className='plan-detail'>
                                    <div className='icon-and-plan-name'>
                                        <Image src={imagesMap(item.category) as string} height='24' width='24' alt='icon' />
                                        <span>{item.displayText}</span>
                                    </div>
                                    <span>&#8377;{item.amount}</span>
                                </div>
                            </div>
                        </MenuItem>
                    );
                })}

            </TextField>
        </PlanDetails>
  );
}

export default PlanDetail


const PlanDetails = styled.div`
    padding: 1rem;
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    .select-input {
    background: #FFFFFF;
    border: 2px solid #2D3D54;
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    }
    .plan-menu-item {
        display: flex;
        flex-direction: column;
        width: 100%;
        .plan-detail {
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;
            .icon-and-plan-name {
                display: flex;
                gap: 5px;
                align-items: center;
            }
        }
    }
`;