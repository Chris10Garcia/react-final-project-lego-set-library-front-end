import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Grid,
  Menu, Header as HeaderUI
} from 'semantic-ui-react';

function BrickList({ legoSetList }) {

  const legoNameListJSX = legoSetList.map(lego => {
    return(
      <Menu.Item key = {lego.id} name = {lego.name} as={NavLink} to = {`/sets/${lego.id}`} />
    )
  })
  return (
    <Grid.Column width={4}>
      <HeaderUI as="h3">Leg Set List</HeaderUI>
      <Menu size="large" vertical fluid style={{ "overflowY": "scroll", "maxHeight": "50vh" }}>
        {legoNameListJSX}
      </Menu>
    </Grid.Column>
  );
}

export default BrickList