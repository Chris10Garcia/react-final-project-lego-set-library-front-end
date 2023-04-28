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

//style = {{"marginTop":"0"}}
  return (
    <Segment >
      <Container textAlign='center'>
        <HeaderUI as='h2'>Lego Set Library</HeaderUI>
      </Container>

      <Grid padded divided>
        <Grid.Row>
          <BrickList legoSetData = {legoSetData}/>

          <Route exact path = {`${match.url}`}>
            <Grid.Column width={12}>
              <Container text textAlign='center'> 
                <HeaderUI as="h3">Lego Set Details</HeaderUI>
                <HeaderUI as="h4">Select a set from the left!</HeaderUI>
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