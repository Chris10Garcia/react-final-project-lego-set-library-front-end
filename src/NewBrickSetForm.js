import React from 'react';
import {
  Container,
  Form,
  Header as HeaderUI
} from 'semantic-ui-react';

function NewBrickSetForm() {
  return (
    <Container text>
      <HeaderUI as='h2'>Add new lego set here</HeaderUI>
      <Form>
        <Form.Field>
          <label>Lego Set Name</label>
          <input placeholder='Name' />
        </Form.Field>
        <Form.Field>
          <label>Year Created</label>
          <input placeholder='Year' type={'number'} />
        </Form.Field>
        <Form.Field>
          <label>Theme</label>
          <input placeholder='should be a dropdown' />
        </Form.Field>
        <Form.Field>
          <label>Image URL</label>
          <input placeholder='img url' />
        </Form.Field>
        <Form.Button type='submit' onClick={(e) => { e.preventDefault(); console.log({ e }); }}>
          <label>Submit</label>
        </Form.Button>
      </Form>
    </Container>
  );
}

export default NewBrickSetForm