import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import {
  Container,
  Grid,
  Menu,
  Segment,
  Header as HeaderUI
} from 'semantic-ui-react';

function BrickList (){
  return(
    <Grid.Column width={4}>
      <HeaderUI as="h3">Leg Set List</HeaderUI>
      <Menu size="large" vertical text fluid style={{ "overflowY": "scroll", "maxHeight": "60vh" }}>
        <Menu.Item name='Set 1' as={NavLink} exact to="/1"></Menu.Item>
        <Menu.Item name='Set 1'></Menu.Item>
        <Menu.Item name='Set 1'></Menu.Item>
        <Menu.Item name='Set 1'></Menu.Item>
        <Menu.Item name='Set 1'></Menu.Item>
        <Menu.Item name='Set 1'></Menu.Item>
        <Menu.Item name='Set 1'></Menu.Item>
        <Menu.Item name='Set 1'></Menu.Item>
      </Menu>
    </Grid.Column>
  )
}

function BrickContainer() {
  const match = useRouteMatch();
  console.log(match);

  return (
    <Segment padded>
      <Container textAlign='center'>
        <HeaderUI as='h2'>Lego Set Library Container</HeaderUI>
      </Container>

      <Grid padded divided>
        <Grid.Row>
          {/* CREATE NEW COMPONENT HERE */}
          <BrickList />
          {/* END OF COMPONET */}

          {/* CREATE NEW COMPONENT HERE */}
          <Grid.Column width={6}>
            <Container text>
              <HeaderUI as="h3">Lego Set Details</HeaderUI>
              Lego details are placed here
            </Container>
          </Grid.Column>
          {/* END OF COMPONET */}

        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default BrickContainer