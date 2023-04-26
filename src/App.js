// import './App.css';
import React from 'react'
import { Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import BrickContainer from './BrickContainer';
import { 
  Segment} from 'semantic-ui-react';
import NewBrickSetForm from './NewBrickSetForm';



function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/sets">
          <BrickContainer />
        </Route>
        <Route path = "/add">
          <NewBrickSetForm />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
