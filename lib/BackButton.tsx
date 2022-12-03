import { ButtonProps } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
interface BackButtonProps extends ButtonProps {
    onButtonClick: () => void;
}
const BackButton = ({onButtonClick, ...props}: BackButtonProps) => {
  return (
    <Container onClick={onButtonClick} {...props}>
        <Image src='/images/back.svg' height='21' width='10' alt='back-icon' />
    </Container>
  )
}

export default BackButton;

const Container = styled.button`
    cursor: pointer;
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    height: 64px;
    width: 64px;
    min-width: 64px;
    border-radius: 50%;
    background: #dedcd9;
    border: none;
`;