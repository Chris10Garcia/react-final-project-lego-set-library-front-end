// import './App.css';
import React from 'react'
import { Route, Switch} from 'react-router-dom';
import { 
  Header as HeaderUI} from 'semantic-ui-react';
import Header from './Header';
import Home from './Home';


function BrickContainer (){
  return(
    <HeaderUI as = 'h2'>Lego Set Library Container</HeaderUI>
  )
}

function NewBrickSet (){
  return(
    <HeaderUI as = 'h2'>Add new lego set here</HeaderUI>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route exact path = "/sets">
          <BrickContainer />
        </Route>
        <Route exact path = "/add">
          <NewBrickSet />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
