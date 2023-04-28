import React from 'react';
import { useRouteMatch, Route } from 'react-router-dom';
import BrickList from './BrickList';
import BrickDetail from './BrickDetail';
import {
  Container as ContainerUI,
  Grid as GridUI,
  Segment as SegmentUI,
  Header as HeaderUI
} from 'semantic-ui-react';



function BrickContainer( {legoSetData} ) {
  const match = useRouteMatch();


  return (
    <SegmentUI >
      <HeaderUI as='h2' textAlign='centered' style={{"padding": "0.5em"}}>Lego Set Library</HeaderUI>

      <GridUI padded>
        <GridUI.Row>
          <GridUI.Column width={5}>
            <BrickList legoSetData = {legoSetData}/>
          </GridUI.Column>

          <GridUI.Column width={11}>

            <Route exact path = {`${match.url}`}>
                <ContainerUI textAlign='center'> 
                  <HeaderUI as="h3">Lego Set Details</HeaderUI>
                  <HeaderUI as="h4">Select a set from the left!</HeaderUI>
                </ContainerUI>
            </Route>

            <Route exact path = {`${match.url}/:legoSetId`}>
              <BrickDetail legoSetData = {legoSetData}/>
            </Route>

          </GridUI.Column>
        </GridUI.Row>
      </GridUI>
    </SegmentUI>
  );
}

export default BrickContainer