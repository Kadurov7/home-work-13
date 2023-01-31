import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import TotalAmount from './TotalAmount'
import styled from 'styled-components'
import BasketItem from './BasketItem'
import { BasketContext } from '../../store/BasketContext'


const Basket = ({onClose}) => {
const {items,uptadeBasketItem, deleteBasketItem } = useContext(BasketContext)
const getTotalPrice = ()=>{
  return items.reduce((sum, {price, amount})=> sum + amount * price, 0)
}
  const decrementAmount = (id, amount)=>{

      if(amount > 1) {
        uptadeBasketItem({amount:amount - 1, id})
      }
      else{
        deleteBasketItem(id)
      }
  }
  const incrementAmount = (id, amount)=>{
    uptadeBasketItem({amount:amount + 1, id})
  }
  return (
      <Modal onClose={()=>{}}>
        <Content>
          {items.length ?(<FixedContainer>
          {items.map((item)=> (
            <BasketItem 
                   key={item._id}
                   incrementAmount={()=>incrementAmount(item._id, item.amount)}
                   decrementAmount={()=>decrementAmount(item._id, item.amount)}
                   title={item.title}
                   price={item.price}
                   amount={item.amount}/>
          )) }
          </FixedContainer>) : null}
          
        <TotalAmount price={getTotalPrice()} onClose={onClose} onOrder={()=>{}} />
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