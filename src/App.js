import Header from "./components/header/Header";
import Summary from "./components/summary/Summary";
import Meals from "./components/meals/Meals";
import Basket from "./components/basket/Basket";
import styled from "styled-components";


function App() {
  return (
    <div className="App">
      <Header/>

     <Content>
     <Summary/>
      <Meals/>
      <Basket/>
     </Content>
    </div>
  );
}

export default App;
 const Content = styled.div`
 margin-top: 101px;
 `