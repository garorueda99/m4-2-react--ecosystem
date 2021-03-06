import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import Header from './Header';
import Homepage from './Homepage';
import About from './About';
import ItemDetails from './ItemDetails';
import Sellers from './Sellers';
import SellerDetails from './SellerDetails';

function App(props) {
  return (
    <Router>
      <Wrapper>
        <Header></Header>
        <Switch>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/items/:itemId'>
            <ItemDetails></ItemDetails>
          </Route>
          <Route path='/sellers/:sellerId'>
            <SellerDetails></SellerDetails>
          </Route>
          <Route path='/sellers'>
            <Sellers></Sellers>
          </Route>
          <Route path='/'>
            <Homepage></Homepage>
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
  margin: 0;
  background-color: #f9f9f9;
  height: 100vh;
  width: 100vw;
  font-size: 1rem;
  overflow: hidden;
`;

export default App;
