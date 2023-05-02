import React, { useEffect, useState } from 'react'
import { Route, Switch} from 'react-router-dom';
import { Segment as SegmentUI } from 'semantic-ui-react';


import Header from './Header';
import Home from './Home';
import BrickContainer from './BrickContainer';
import NewBrickSetForm from './NewBrickSetForm';


function App() {
  const [legoSetData, setLegoSetData] = useState([])

  useEffect( () => {
    fetch(process.env.REACT_APP_API_URL)
    .then( r => r.json() )
    .then( d => setLegoSetData(d))
  }, [])
 

  function addLego(legoObj){
    setLegoSetData([...legoSetData, legoObj])
  }

  //
  return (
    <SegmentUI.Group className="App" style={{"height" : "100vh"}}>
      <Header/>
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/sets">
          <BrickContainer legoSetData = {legoSetData} />
        </Route>
        <Route path = "/add">
          <NewBrickSetForm addLego={addLego}/>
        </Route>
      </Switch>

    </SegmentUI.Group>
  );
}

export default App;
