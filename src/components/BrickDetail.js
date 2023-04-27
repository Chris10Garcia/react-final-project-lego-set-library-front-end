import React from 'react';
import { useParams, Redirect } from "react-router-dom";
import {
  Card,
  Container,
  Grid, Header as HeaderUI, Image
} from 'semantic-ui-react';

function BrickDetail({legoSetData}) {
  const params = useParams()
  params.legoSetId = params.legoSetId - 1
  const legoSet = legoSetData[params.legoSetId]
  
  // wait for page to load.
  // maybe add a loading screen animation
  if (!legoSet) return <h3>page loading...</h3>


  return (
    <Grid.Column width={6}>
      <Card centered>
      <Card.Content textAlign='center'>
        <Image src={legoSet.img_url}></Image>
        <Card.Header> Name: {legoSet.name}</Card.Header>
        <Card.Meta> Lego Set ID: {legoSet.set_num}</Card.Meta>
        <Card.Description> Year: {legoSet.year} </Card.Description>
        <Card.Description> Theme: {legoSet.theme} </Card.Description>
        <Card.Description> Number of Parts: {legoSet.num_parts} </Card.Description>
      </Card.Content>
      </Card>
    </Grid.Column>

  );
}

export default BrickDetail