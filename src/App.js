// import './App.css';
import React from 'react'
import { Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import BrickContainer from './BrickContainer';
import { 
  Header as HeaderUI} from 'semantic-ui-react';



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
