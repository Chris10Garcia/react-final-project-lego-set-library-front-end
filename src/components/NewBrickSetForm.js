import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Form,
  Header as HeaderUI,
  Input
} from 'semantic-ui-react';

function NewBrickSetForm({addLego}) {
  const history = useHistory()

  const [formData, setFormData] = useState({
    set_num : "",
    name : "",
    year : "",
    num_parts : "",
    theme : "",
    img_url : "",
  })

  function handleChange(e){
    const key = e.target.name
    const value = e.target.value
    setFormData({...formData, [key] : value})
  }

  function handleSubmit(){
    console.log(formData)
    //fetch request

    fetch('http://localhost:3001/legoset', {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(formData)})
      .then( r => r.json() )
      .then( data => { 
        addLego(data)
        alert(`Hello, ${data.name} was successfully added!`)
        history.push(`sets/${data.id}`)  


      })

  }

  return (
    <Container text>
      <HeaderUI as='h2'>Add new lego set here</HeaderUI>
      <Form onSubmit = {handleSubmit}>
        <Form.Field control='input' label="Lego Set ID" placeholder='Set ID' name='set_num' onChange={handleChange} value={formData.set_num}/> 
        <Form.Field control='input' label="Lego Set Name" placeholder='Name' name='name' onChange={handleChange}/>
        <Form.Field control='input' label="Year Created" placeholder='Year' name='year' type='number' onChange={handleChange}/>
        <Form.Field control='input' label="Number of Parts" placeholder='# of Parts' name='num_parts' type='number' onChange={handleChange}/>
        <Form.Field control='input' label="Theme" placeholder='Theme' name='theme' onChange={handleChange}/>
        <Form.Field control='input' label="Image URL" placeholder='Img Url' name='img_url' onChange={handleChange}/>
        <Form.Button content='Submit' />
      </Form>
    </Container>
  );
}

export default NewBrickSetForm