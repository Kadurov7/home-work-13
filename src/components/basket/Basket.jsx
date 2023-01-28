import React from 'react'
import Modal from '../UI/Modal'
import TotalAmount from './TotalAmount'
import styled from 'styled-components'
import BasketItem from './BasketItem'


const Basket = () => {

  const items = [
    {
      id:'1',
      title:'Sushi',
      amount:1,
      price: 22.99,
    },
    {
      id:'2',
      title:'Schnitzel',
      amount:1,
      price:16.99,
    },
    {
      id:'3',
      title:'Barbecue Burger',
      amount:1,
      price: 12.99,
    },
    {
      id:'4',
      title:'Green Bowl',
      amount:1,
      price: 19.99,
    },
  ]
  return (
      <Modal onClose={()=>{}}>
        <Content>
          {items.length ?(<FixedContainer>
          {items.map((item)=> (
            <BasketItem 
                   key={item.id}
                   title={item.title}
                   price={item.price}
                   amount={item.amount}/>
          )) }
          </FixedContainer>) : null}
          
        <TotalAmount price={200.5034} onClose={()=>{}} onOrder={()=>{}} />
        </Content>
      
      </Modal>
  )
}

export default Basket;
const Content = styled.div`
  width:100%;
  height: 100%;
  padding: 0 1rem 1.5rem 1rem;
`
const FixedContainer = styled.div`
  height: 228px;
  overflow-y: scroll;

`