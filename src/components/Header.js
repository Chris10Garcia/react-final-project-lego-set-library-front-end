import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Header as HeaderUI,
  Menu as MenuUI,
  Segment
} from 'semantic-ui-react';

function Header() {
  return (
    <Segment style={{ "marginBottom": "0em", "paddingTop" : "3em" }}>
      <HeaderUI as='h1' image = {require("../assets/lego-red-brick-logo.jpeg")} content='Lego Set Library' />
      <MenuUI widths={3} size ="huge">
        <MenuUI.Item
          as={NavLink}
          exact to="/"
          name="home" />
        <MenuUI.Item
          as={NavLink}
          to="/sets"
          name="set library" />
        <MenuUI.Item
          as={NavLink}
          to="/add"
          name="add to library" />
      </MenuUI>
    </Segment>
  );
}

export default Header