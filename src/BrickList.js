import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Grid,
  Menu, Header as HeaderUI
} from 'semantic-ui-react';

function BrickList({ legoSetList }) {

  
  return (
    <Grid.Column width={4}>
      <HeaderUI as="h3">Leg Set List</HeaderUI>
      <Menu size="large" vertical text fluid style={{ "overflowY": "scroll", "maxHeight": "60vh" }}>
        <Menu.Item name='Set 1' as={NavLink} exact to="/1"></Menu.Item>
        <Menu.Item name='Set 1'></Menu.Item>
        <Menu.Item name='Set 1'></Menu.Item>
        <Menu.Item name='Set 1'></Menu.Item>
        <Menu.Item name='Set 1'></Menu.Item>
        <Menu.Item name='Set 1'></Menu.Item>
        <Menu.Item name='Set 1'></Menu.Item>
        <Menu.Item name='Set 1'></Menu.Item>
      </Menu>
    </Grid.Column>
  );
}

export default BrickList