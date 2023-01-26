import React from 'react'
import styled from 'styled-components';
import {ReactComponent as BasketIcon } from '../../assets/icons/Component 6/basket-svg.svg'


const BasketButton = ({count = 0}) => {
  return (
    <StyledBtn>
           <BasketIcon/>
            <StyledTitle>Your Cart</StyledTitle>
            <StyledConter>{count}</StyledConter>
    </StyledBtn>
  )
}

export default BasketButton;

const StyledBtn = styled.button`
    background-color:#5A1F08;
    border-radius: 30px;
    padding: 12px 32px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #ffffff;
    border: none;
    cursor: pointer;
    &&:hover{
        background-color: #2c0d00;
    }
    &&:hover > #counter{
        background-color: #1a0902;
    }
`
const StyledTitle = styled.span`
    margin-left: 12px;
    margin-right: 24px;
`
const StyledConter = styled.span`
    color: white;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    background: #8A2B06;
    border-radius: 30px;
    padding: 4px 20px;
`