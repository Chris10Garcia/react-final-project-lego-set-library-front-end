import React from 'react';
import {
  Card,
  Container,
  Header as HeaderUI,
  Segment
} from 'semantic-ui-react';

function Home() {
  return (
    <Segment textAlign='center' style={{ "margin": "0em" }}>
      <Container text style={{ "marginTop": "2em" }}>
        <HeaderUI as='h2'>Welcome to the Lego Set Library</HeaderUI>
        <HeaderUI as='h4' style={{ "margin-top": "6em" }}>
          A repository of various Leg set's and their details

        </HeaderUI>
      </Container>
      <Container style={{ "padding": "10em" }}>
        <Card.Group itemsPerRow={4}>
          <Card image={require("./assets/legotestpic.png")} />
          <Card image={require("./assets/legotestpic.png")} />
          <Card image={require("./assets/legotestpic.png")} />
          <Card image={require("./assets/legotestpic.png")} />
        </Card.Group>
      </Container>
    </Segment>

  );
}

export default Home