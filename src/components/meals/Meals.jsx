import React from 'react'
import styled from 'styled-components'
import MealItem from './meal-item/MealItem'


const DUMMY_MEALS = [
  {
    id:'1',
    title:'Sushi',
    descreption:'Finest fish and veggies',
    price: 22.99,
  },
  {
    id:'2',
    title:'Schnitzel',
    descreption:'A german specialty!',
    price:16.00,
  },
  {
    id:'3',
    title:'Barbecue Burger',
    descreption:'American, raw, meaty',
    price: 12.99,
  },
  {
    id:'4',
    title:'Green Bowl',
    descreption:'Healthy...and green...',
    price: 19.99,
  },
]

const Meals = () => {
  return (
    <Card>
      {DUMMY_MEALS.map((meal)=>(
         <MealItem meal={meal}/>
      ))}
    </Card>
  )
}

export default Meals;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  width: 75%;
  padding: 40px 40px 36px 40px;
  margin: 40px auto;
`