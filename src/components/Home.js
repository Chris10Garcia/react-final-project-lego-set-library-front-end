import React from 'react';
import {
  Container as ContainerUI,
  Header as HeaderUI,
  Image as ImageUI,
  Segment as SegmentUI
} from 'semantic-ui-react';

function Home() {

  return (
    <SegmentUI textAlign='center'>
      <ContainerUI text style={{ "marginTop": "5em" }}>
        <HeaderUI as='h2' size='huge'>Welcome to the Lego Set Library</HeaderUI>
        <HeaderUI as='h4' style={{ "marginTop": "2em" }}>A repository of various lego set's and their details</HeaderUI>
      </ContainerUI>
      <ContainerUI style={{ "padding": "5em", "width":"50%"}} centered="true" >
        <ImageUI.Group size = "small">
          <ImageUI floated='left' src={require("../assets/legofigure.jpg")} />
          <ImageUI floated="right" src={require("../assets/legofigure2.webp")} />
        </ImageUI.Group>
      </ContainerUI>
    </SegmentUI>

  );
}

export default Home