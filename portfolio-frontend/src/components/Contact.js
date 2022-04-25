import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap';

const Contact = () => {

  const [email, setEmail] = useState({
    email: '',
    body: ''
  });

  const handleChange = (e) => {
    let newEmail = {...email};
    newEmail[e.target.name] = e.target.value;
    setEmail(newEmail);
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/send_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(email)
    })
  }

  return (
    <Container className='contact-form'>
      <h1 className='form-header'>Need to get in touch?</h1>
      <Form onSubmit={handleEmailSubmit}>
        <Form.Group controlid='formBasicEmail' className='mb-3'>
          <Form.Control type='email' required placeholder='Email' name='email' onChange={handleChange} />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Control as='textarea' required rows={5} name='body' onChange={handleChange} />
        </Form.Group>
        <Button variant='primary' type='submit'>Submit</Button>
      </Form>
    </Container>
      
  )
}

export default Contact