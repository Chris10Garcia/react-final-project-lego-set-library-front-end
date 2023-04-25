import React from 'react';
import { useRouteMatch, Route } from 'react-router-dom';
import BrickList from './BrickList';
import BrickDetail from './BrickDetail';
import {
  Container,
  Grid,
  Segment,
  Header as HeaderUI
} from 'semantic-ui-react';



const legoSetList = [ 
  {id: 1, name:"Avengers Set", image: "marvel.jpg", theme: "sci-fi", numOfParts: 3545 },
  {id: 2, name:"Dragon Island", image: "dragons.jpg", theme: "fantasy", numOfParts: 399 },
  {id: 3, name:"City Block", image: "building.jpg", theme: "civil", numOfParts: 5035 },
  {id: 4, name:"Train town", image: "train.jpg", theme: "civl", numOfParts: 999 },
  {id: 5, name:"Avengers Set", image: "marvel.jpg", theme: "sci-fi", numOfParts: 3545 },
  {id: 6, name:"Dragon Island", image: "dragons.jpg", theme: "fantasy", numOfParts: 399 },
  {id: 7, name:"City Block", image: "building.jpg", theme: "civil", numOfParts: 5035 },
  {id: 8, name:"Train town", image: "train.jpg", theme: "civl", numOfParts: 999 },
  {id: 9, name:"Avengers Set", image: "marvel.jpg", theme: "sci-fi", numOfParts: 3545 },
  {id: 10, name:"Dragon Island", image: "dragons.jpg", theme: "fantasy", numOfParts: 399 },
  {id: 11, name:"City Block", image: "building.jpg", theme: "civil", numOfParts: 5035 },
  {id: 12, name:"Train town", image: "train.jpg", theme: "civl", numOfParts: 999 },
  {id: 13, name:"Avengers Set", image: "marvel.jpg", theme: "sci-fi", numOfParts: 3545 },
  {id: 14, name:"Dragon Island", image: "dragons.jpg", theme: "fantasy", numOfParts: 399 },
  {id: 15, name:"City Block", image: "building.jpg", theme: "civil", numOfParts: 5035 },
  {id: 16, name:"Train town", image: "train.jpg", theme: "civl", numOfParts: 999 },
]



function BrickContainer() {
  const match = useRouteMatch();
  console.log(match.url);

  return (
    <Segment padded style = {{"marginTop":"0"}}>
      <Container textAlign='center'>
        <HeaderUI as='h2'>Lego Set Library Container</HeaderUI>
      </Container>

      <Grid padded divided>
        <Grid.Row>
          <BrickList legoSetList = {legoSetList}/>

          <Route exact path = {`${match.url}`}>
            <Grid.Column width={6}>
              <Container text> 
                <HeaderUI as="h3">Lego Set Details</HeaderUI>
                Lego details are placed here
              </Container>
            </Grid.Column>
          </Route>

          <Route exact path = {`${match.url}/:legoSetId`}>
            <BrickDetail legoSetList = {legoSetList}/>
          </Route>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default BrickContainer