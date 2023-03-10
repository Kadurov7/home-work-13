import React, { useContext } from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { BasketContext } from '../../store/BasketContext'

const BasketItem = ({title, price, amount, decrementAmount, incrementAmount}) => {


  return (
    <Container>
        <Title>{title}</Title>
        <Content>
            <PriceAndAmountContainer>
                <Price>${price}</Price>
                <Amount>{amount}</Amount>
            </PriceAndAmountContainer>
            <CounterConteiner>
              <Button borderStyle="sususu" variant="outlained" onClick={decrementAmount}>-</Button>
              <Button borderStyle="sususu" variant="outlained" onClick={incrementAmount}>+</Button>
            </CounterConteiner>
        </Content>
    </Container>
  )
}

export default BasketItem;

const Container = styled.div`
    padding: 24px 0;
    width: 100%;
`
const Title  = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    margin: 0 0 12px 0  ;
    color: #222222;
`
const Price = styled.p`
 
   font-weight: 600;
   font-size: 18px;
   line-height: 27px;
   color: #ad5502;
   margin: 0;
`
const Amount = styled.span`
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    padding: 6px 14px;
    color: #222222;
    display:block;
`
const PriceAndAmountContainer = styled.div`
    display: flex;
    align-items: center;
    width: 153px;
    justify-content: space-between;
`
const CounterConteiner = styled.div`
   display: flex;
   gap: 14px;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`