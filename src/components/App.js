// import './App.css';
import React, { useEffect, useState } from 'react'
import { Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import BrickContainer from './BrickContainer';
// import { 
//   Segment} from 'semantic-ui-react';
import NewBrickSetForm from './NewBrickSetForm';



function App() {

  // brickList Data needs to be here because of BrickContainer and NewBrickForm Components

  const [legoSetData, setLegoSetData] = useState([])

  useEffect( () => {

    fetch('http://localhost:3001/legoset')
    .then( r => r.json() )
    .then( d => setLegoSetData(d))
  }, [])


  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/sets">
          <BrickContainer legoSetData = {legoSetData} />
        </Route>
        <Route path = "/add">
          <NewBrickSetForm />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
