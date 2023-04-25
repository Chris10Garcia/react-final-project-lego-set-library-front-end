import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import BrickList from './BrickList';
import {
  Container,
  Grid,
  Segment,
  Header as HeaderUI
} from 'semantic-ui-react';

const brickList = [ 
  {id: 1, name:"Avengers Set", image: "marvel.jpg", theme: "sci-fi", numOfParts: 3545 },
  {id: 2, name:"Dragon Island", image: "dragons.jpg", theme: "fantasy", numOfParts: 399 },
  {id: 3, name:"City Block", image: "building.jpg", theme: "civil", numOfParts: 5035 },
  {id: 4, name:"Train town", image: "train.jpg", theme: "civl", numOfParts: 999 },
  {id: 5, name:"Avengers Set", image: "marvel.jpg", theme: "sci-fi", numOfParts: 3545 },
  {id: 6, name:"Dragon Island", image: "dragons.jpg", theme: "fantasy", numOfParts: 399 },
  {id: 7, name:"City Block", image: "building.jpg", theme: "civil", numOfParts: 5035 },
  {id: 8, name:"Train town", image: "train.jpg", theme: "civl", numOfParts: 999 },
]

function BrickDetail (){
  return (
    <Grid.Column width={6}>
      <Container text>
        <HeaderUI as="h3">Lego Set Details</HeaderUI>
        Lego details are placed here
      </Container>
    </Grid.Column>

  )
}

function BrickContainer() {
  const match = useRouteMatch();
  console.log(match);

  return (
    <Segment padded style = {{"marginTop":"0"}}>
      <Container textAlign='center'>
        <HeaderUI as='h2'>Lego Set Library Container</HeaderUI>
      </Container>

      <Grid padded divided>
        <Grid.Row>
          <BrickList brickList = {brickList}/>
          <BrickDetail />

        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default BrickContainer