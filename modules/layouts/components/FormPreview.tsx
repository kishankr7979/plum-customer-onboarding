import React from 'react'
import styled from 'styled-components';
import { OnboardingDataTypes } from '../../../state/reducer';
interface FormPreviewProps {
  user: OnboardingDataTypes['user'];
}
const FormPreview = ({ user }: FormPreviewProps) => {
  return (
    <Parent>
      <Item>
        <span>Personal email address </span>
        <span>{user?.email || '-'}</span>
      </Item>
      <Item>
        <span>Mobile number </span>
        <span>{user?.phone || '-'}</span>
      </Item>
      <Item>
        <span>Address line 01 </span>
        <span>{user?.addressLineOne || '-'}</span>
      </Item>
      <Item>
        <span>Address line 02 </span>
        <span>{user?.addressLineTwo || '-'}</span>
      </Item>
      <Item>
        <span>Pincode </span>
        <span>{user?.pinCode || '-'}</span>
      </Item>
      <Item>
        <span>state </span>
        <span>{user?.state || '-'}</span>
      </Item>
    </Parent>
  )
}

export default FormPreview;

const Parent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
    padding: 1rem;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;