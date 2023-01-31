import Header from "./components/header/Header";
import Summary from "./components/summary/Summary";
import Meals from "./components/meals/Meals";
import Basket from "./components/basket/Basket";
import styled from "styled-components";
import { useState } from "react";
import { BasketProvider } from "./store/BasketContext";


function App() {

  const [isBasketVisible, setBasketVisible]= useState(false)

  const showBasketHandler = ()=>{
    setBasketVisible(prevState => ! prevState)
  }
  return (
      <BasketProvider>
      <Header onShowBasket={showBasketHandler}/>
     <Content>
     <Summary/>
      <Meals/>
      {isBasketVisible && <Basket onClose={showBasketHandler}/>}
     </Content>
      </BasketProvider>

  );
}

export default App;
 const Content = styled.div`
 margin-top: 101px;
 `

// GET /foods

// GET /basket

// POST /foods/:foodId/addToBasket

// BODY: { amount: number }

// DELETE /basketItem/:id/delete

// PUT /basketItem/:id/update

// BODY: { amount: number }
