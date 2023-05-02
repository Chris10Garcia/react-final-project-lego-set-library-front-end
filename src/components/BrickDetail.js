import React from 'react';
import { useParams } from "react-router-dom";
import {
  Card as CardUI,
  Header as HeaderUI, 
  Image as ImageUI
} from 'semantic-ui-react';

function BrickDetail({legoSetData}) {
  const params = useParams()
  params.legoSetId = params.legoSetId - 1 
  const legoSet = legoSetData[params.legoSetId]
  
  // wait for page to load.
  // maybe add a loading screen animation
  if (!legoSet) return <h3>page loading...</h3>

  const properties = {
    "display": "block",
    "marginLeft": "auto",
    "marginRight": "auto",
    "width": "60%"
  }

  return (
    <React.Fragment>
      <HeaderUI as ="h3" textAlign='center'>Lego Set Details</HeaderUI>
      <CardUI fluid style={properties}>
        <CardUI.Content>
          <CardUI.Header>{legoSet.name}</CardUI.Header>
          <CardUI.Meta>Lego Set ID: {legoSet.set_num}</CardUI.Meta>
        </CardUI.Content>
        <CardUI.Content >
          <div style ={properties}>
            <ImageUI style={{ maxHeight: "42vh"}} src={legoSet.img_url}></ImageUI>
          </div>
        </CardUI.Content  >
        <CardUI.Content  >
          <CardUI.Description> <b>Year:</b> {legoSet.year} </CardUI.Description>
          <CardUI.Description> <b>Theme:</b> {legoSet.theme} </CardUI.Description>
          <CardUI.Description> <b>Number of Parts:</b> {legoSet.num_parts} </CardUI.Description>
        </CardUI.Content>
      </CardUI>
    </React.Fragment>

  );
}

export default BrickDetail