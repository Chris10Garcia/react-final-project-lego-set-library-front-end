import React from 'react';
import { useParams, Redirect } from "react-router-dom";
import {
  Card,
  Container,
  Grid, Header as HeaderUI, Image, Item
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
    "margin-left": "auto",
    "margin-right": "auto",
    "width": "60%"
  }
//style={{maxHeight: "40vh"}}
  return (
    <Grid.Column width={12}>
      <HeaderUI as ="h3" textAlign='center'>Lego Set Details</HeaderUI>


      <Card fluid style={properties}>
        <Card.Content>
          <Card.Header>{legoSet.name}</Card.Header>
          <Card.Meta> Lego Set ID: {legoSet.set_num}</Card.Meta>
        </Card.Content>
        <Card.Content >
          <div style ={properties}>
            <Image style={{ maxHeight: "40vh"}} src={legoSet.img_url}></Image>
          </div>
        </Card.Content  >
        <Card.Content  >
          <Card.Description> <b>Year:</b> {legoSet.year} </Card.Description>
          <Card.Description> <b>Theme:</b> {legoSet.theme} </Card.Description>
          <Card.Description> <b>Number of Parts:</b> {legoSet.num_parts} </Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>

  );
}

export default BrickDetail