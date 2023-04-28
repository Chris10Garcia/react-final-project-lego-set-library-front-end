import { findByLabelText } from '@testing-library/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Grid,
  Menu, Header as HeaderUI
} from 'semantic-ui-react';

function BrickList({ legoSetData }) {

  const legoNameListJSX = legoSetData.map(lego => {
    return(
      <Menu.Item key = {lego.id} name = {lego.name} as={NavLink} to = {`/sets/${lego.id}`} />
    )
  })
  //"display":"flex", "flex-flow": "column", "height":"100%"
  // "overflowY": "scroll", "maxHeight": "100vh" 
  return (
    <Grid.Column width ={4} >
      <HeaderUI as="h3">Leg Set List</HeaderUI>
      <Menu size="large" vertical fluid style={{ "overflowY": "scroll", height:"68vh"}}>
        {legoNameListJSX}
      </Menu>
    </Grid.Column>
  );
}

export default BrickList