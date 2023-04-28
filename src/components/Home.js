import React from 'react';
import {
  Card as CardUI,
  Container as ContainerUI,
  Header as HeaderUI,
  Segment
} from 'semantic-ui-react';

function Home() {
  //style={{ "margin": "0em" }}
  //style = {{"minHeight": "100%"}}
  return (
    <Segment textAlign='center'>
      <ContainerUI text style={{ "marginTop": "10em" }}>
        <HeaderUI as='h2' size='huge'>Welcome to the Lego Set Library</HeaderUI>
        <HeaderUI as='h4' style={{ "marginTop": "2em" }}> A repository of various Leg set's and their details</HeaderUI>
      </ContainerUI>
      <ContainerUI style={{ "padding": "5em" }}>
        <CardUI.Group itemsPerRow={4}>
          <CardUI image={require("../assets/legotestpic.png")} />
          <CardUI image={require("../assets/legotestpic.png")} />
          <CardUI image={require("../assets/legotestpic.png")} />
          <CardUI image={require("../assets/legotestpic.png")} />
        </CardUI.Group>
      </ContainerUI>
    </Segment>

  );
}

export default Home