import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Menu as MenuUI, 
  Header as HeaderUI
} from 'semantic-ui-react';

function BrickList({ legoSetData }) {

  const renderLegoSetData = legoSetData.map(lego => {
    return(
      <MenuUI.Item 
          key = {lego.id} 
          name = {lego.name} 
          as={NavLink} 
          to = {`/sets/${lego.id}`} />
    )
  })

  return (
    <React.Fragment>
      <HeaderUI as="h3">Leg Set List</HeaderUI>
      <MenuUI size="large" vertical fluid style={{ "overflowY": "scroll", height:"64vh"}}>
        { renderLegoSetData }
      </MenuUI>
    </React.Fragment>
  );
}

export default BrickList