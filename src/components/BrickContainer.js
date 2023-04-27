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



function BrickContainer( {legoSetData} ) {
  const match = useRouteMatch();


  return (
    <Segment padded style = {{"marginTop":"0"}}>
      <Container textAlign='center'>
        <HeaderUI as='h2'>Lego Set Library Container</HeaderUI>
      </Container>

      <Grid padded divided>
        <Grid.Row>
          <BrickList legoSetData = {legoSetData}/>

          <Route exact path = {`${match.url}`}>
            <Grid.Column width={6}>
              <Container text> 
                <HeaderUI as="h3">Lego Set Details</HeaderUI>
                Lego details are placed here
              </Container>
            </Grid.Column>
          </Route>

          <Route exact path = {`${match.url}/:legoSetId`}>
            <BrickDetail legoSetData = {legoSetData}/>
          </Route>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default BrickContainer