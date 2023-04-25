import React from 'react';
import { useParams } from "react-router-dom";
import {
  Container,
  Grid, Header as HeaderUI
} from 'semantic-ui-react';

function BrickDetail({legoSetList}) {
  console.log(legoSetList)
  const params = useParams()

  return (
    <Grid.Column width={6}>
      <Container text>
        <HeaderUI as="h3">This worked! and {params.legoSetId}</HeaderUI>
          Name: {legoSetList[params.legoSetId].name}
          Theme: {legoSetList[params.legoSetId].theme}
          Number of Parts: {legoSetList[params.legoSetId].numOfParts}
      </Container>
    </Grid.Column>

  );
}

export default BrickDetail