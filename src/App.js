// import './App.css';
import React from 'react'
import { Route, Switch} from 'react-router-dom';
import { 
  Container,
  Grid,
  Header as HeaderUI, Menu, Segment} from 'semantic-ui-react';
import Header from './Header';
import Home from './Home';


function BrickContainer (){
  return(
    <Segment padded>
      <Container textAlign='center'>
        <HeaderUI as = 'h2'>Lego Set Library Container</HeaderUI>
      </Container>
      <Grid padded divided grid>
        <Grid.Row>
          <Grid.Column width = {4}>
            <HeaderUI as = "h3">Leg Set List</HeaderUI>
              <Menu vertical text fluid style = {{"overflow-y":"scroll", "max-height": "60vh"}}>
                <Menu.Item name='Set 1'></Menu.Item>
                <Menu.Item name='Set 1'></Menu.Item>
                <Menu.Item name='Set 1'></Menu.Item>
                <Menu.Item name='Set 1'></Menu.Item>
                <Menu.Item name='Set 1'></Menu.Item>
                <Menu.Item name='Set 1'></Menu.Item>                
                <Menu.Item name='Set 1'></Menu.Item>
                <Menu.Item name='Set 1'></Menu.Item>
              </Menu>
          </Grid.Column>
          <Grid.Column width = {6}>
            <Container text>
              <HeaderUI as = "h3">Lego Set Details</HeaderUI>
               
              Lego details are placed here
            
            </Container>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
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
