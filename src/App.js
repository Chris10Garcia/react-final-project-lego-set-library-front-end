// import './App.css';
import React from 'react'
import { Header as HeaderUI, Menu as MenuUI, Container} from 'semantic-ui-react';
import { NavLink, Route, Switch} from 'react-router-dom';

function Header (){



  return(
    <Container text>
      <HeaderUI as = 'h1'>Lego Set Library</HeaderUI>
      <MenuUI inverted>
        <MenuUI.Item 
          as = {NavLink}
          exact to = "/"
          name = "home"
        />
        <MenuUI.Item 
          as = {NavLink}
          exact to = "/sets"
          name = "set library"
        />
        <MenuUI.Item 
          as = {NavLink}
          exact to = "/add"
          name = "add to library"
        />
      </MenuUI>
    </Container>
  )
}

function Home (){
  return(
    <HeaderUI as = 'h2'>Home Page</HeaderUI>
  )
}

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
