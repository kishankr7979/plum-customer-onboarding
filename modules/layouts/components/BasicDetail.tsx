import React from 'react'
import styled from 'styled-components';
import { OnboardingDataTypes } from '../../../state/reducer';
interface BasicDetailProps {
  user: OnboardingDataTypes['user'];
  onChangeHandler: (val: any) => void;
}
const BasicDetail = ({ user, onChangeHandler }: BasicDetailProps) => {
  const basicDetailsJson = [
    {
      id: 1,
      label: 'Personal email address',
      type: 'text',
      value: user?.email,
      onChange: (val: string) => onChangeHandler({ ...user, email: val }),
      required: true,
    },
    {
      id: 2,
      label: 'Mobile number',
      type: 'text',
      value: user?.phone,
      onChange: (val: string) => onChangeHandler({ ...user, phone: val }),
      required: true,
    },
    {
      id: 3,
      label: 'Address line 01',
      type: 'text',
      value: user?.addressLineOne,
      onChange: (val: string) => onChangeHandler({ ...user, addressLineOne: val }),
      required: true,
    },
    {
      id: 4,
      label: 'Address line 02',
      type: 'text',
      value: user?.addressLineTwo,
      onChange: (val: string) => onChangeHandler({ ...user, addressLineTwo: val }),
      required: true,
    },
    {
      id: 5,
      label: 'Pincode',
      type: 'text',
      value: user?.pinCode,
      onChange: (val: string) => onChangeHandler({ ...user, pinCode: val }),
      required: true,
    },
    {
      id: 6,
      label: 'State',
      type: 'text',
      value: user?.state,
      onChange: (val: string) => onChangeHandler({ ...user, state: val }),
      required: true,
    }
  ]
  return (
    <Parent>
      <div className="box">
        {basicDetailsJson.map((item) => {
          return (
            <div className='items' key={item.id}>
              <span className="label">{item.label}</span>
            <InputTag key={item.id} placeholder={item.label} value={item.value} onChange={(event) => item.onChange(event.target.value)} />
            </div>
          );
        })}
      </div>
    </Parent>
  )
}

export default BasicDetail;


const Parent = styled.div`
.box {
  width: 100%;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  flex-flow: wrap;
  .items {
    display: flex;
    flex-direction: column;
    gap: 5px;
    .label {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;      
      color: #2D3D54;
    }
  }
}
.box>* {
  flex: 1 1 40%;
}
   
`;

const InputTag = styled.input`
    box-sizing: border-box;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #8C98AB;
    border-radius: 6px;
    height: 50px;

`;