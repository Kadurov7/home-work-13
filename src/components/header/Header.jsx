import React from 'react'
import styled from 'styled-components';
import BasketButton from './BasketButton';

const Header = () => {
  return (
    <Container>
        <Logo>ReactMeals</Logo>
        <BasketButton>
        </BasketButton>
    </Container>
  )
}

export default Header;

const Container = styled.header`
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    height: 101px;
    background-color: #8A2B06;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left:120px;
    padding-right: 120px;
`
const Logo = styled.p`
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;
    color: #FFFFFF;
    margin: 0;
`
