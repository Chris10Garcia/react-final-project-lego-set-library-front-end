import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Header as HeaderUI,
  Menu as MenuUI,
  Segment as SegmentUI
} from 'semantic-ui-react';

function Header() {
  return (
    <SegmentUI >
      <HeaderUI as='h1' image = {require("../assets/lego-red-brick-logo.jpeg")} content='Lego Set Library' />
      <MenuUI widths={ 3 } size ="large" pointing color="yellow">
        <MenuUI.Item
          as={ NavLink }
          exact to="/"
          name="home" />
        <MenuUI.Item
          as={ NavLink }
          to="/sets"
          name="set library" />
        <MenuUI.Item
          as={ NavLink }
          to="/add"
          name="add to library" />
      </MenuUI>
    </SegmentUI>
  );
}

export default Header