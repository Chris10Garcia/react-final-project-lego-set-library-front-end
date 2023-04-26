import React from 'react';
import { useParams } from "react-router-dom";
import {
  Card,
  Container,
  Grid, Header as HeaderUI
} from 'semantic-ui-react';

function BrickDetail({legoSetList}) {
  const params = useParams()
  params.legoSetId = params.legoSetId - 1
  
  return (
    <Grid.Column width={6}>
      <Card centered>
      <Card.Content textAlign='center'>
        <Card.Header> Name: {legoSetList[params.legoSetId].name}</Card.Header>
        <Card.Description> Theme: {legoSetList[params.legoSetId].theme} </Card.Description>
        <Card.Description> Number of Parts: {legoSetList[params.legoSetId].numOfParts} </Card.Description>
      </Card.Content>
      </Card>
    </Grid.Column>

  );
}

export default BrickDetail