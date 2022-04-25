import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NavbarComponent = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Navbar bg='primary' variant='dark' expand='lg'>
        <Container>
          <Navbar.Collapse id='basic-navbar-nav' className='navbar-collapse'>
            <Nav>
              <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate('/contact')}>Contact</Nav.Link>
              <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
              <Nav.Link onClick={() => navigate('/projects')}>Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent