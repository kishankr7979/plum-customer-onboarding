import React, { useState } from 'react'
import styled from 'styled-components';

interface CardProps {
    title: string | JSX.Element;
    content: string | JSX.Element;
    variant?: number;
}
const Card = ({title, content,variant=1}: CardProps) => {
    const [open, setOpen] = useState<boolean>(true);
    const onAccordionClick = () =>{ 
        if([2,3].includes(variant)) return;
        setOpen(!open)
    };
    return (
        <Parent>
            <Title onClick={onAccordionClick} variant={variant}>
                <span className='card-title'>{title}</span>
                {variant === 1 && <span className='arrow'>{open ? <>&#8593;</> : <>&#8595;</>}</span>}
            </Title>
            {open && <Content>{content}</Content>}
        </Parent>
    )
}

export default Card

const Parent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    height: 100%;
    width: 100%;
    background: #FFFFFF;
    border-radius: 10px;
`;

const Title = styled.div<{variant: number}>`
    cursor: pointer;
    background: #FFFFFF;
    box-shadow: inset 0px -1px 0px #E1E5EB;
    border-radius: 10px 10px 0px 0px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => [1, 3].includes(props.variant) ? 'space-between' : 'center'};

    align-items: ${(props) => [1, 3].includes(props.variant) ? 'flex-start' : 'center'};
    padding: 16px;
    gap: 10px;

    .card-title {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 130%;

        color: #182639;
    }

    .arrow {

    }

`;
const Content = styled.div`
    width: 100%;
    border-radius: 0px 0px 10px 10px;
`;