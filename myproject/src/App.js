import React from "react";
import './App.css';
import styled from 'styled-components'
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Exchange from "./components/exchange/Exchange";
import Ex from "./components/exchange/Ex";

function App() {
  return (
  <Router>
    <Sidebar/>
    <Switch>
      <Route exact path="/">
        <MainContent/>
      </Route>
      <Route path="/exchange">
        <Exchange/>
      </Route>
      <Route path="/ex/:userId">
        <Ex/>
      </Route>


    </Switch>
      
    

  </Router>
  );
}

const Container = styled.div`
  display:flex;
  height: 97vh;
  border-radius: 2rem;
`;

export default App;
