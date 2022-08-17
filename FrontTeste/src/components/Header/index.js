import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Imagem from '../Imagens/transparente.png'
import './style.css'

function index() {
  return (
    <Navbar bg="white" expand="lg">
  <Container >
  <img className="HeaderLogo" src={Imagem}/>
    <Navbar.Brand href="#home"><Link to='/' className='HeaderLink'>INTEC</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

    <img className="HeaderLogo" src="https://cdn-icons.flaticon.com/png/512/2702/premium/2702162.png?token=exp=1658023697~hmac=477a2511a93385e973fa94dddf7595f2"/>
    <Nav.Link> <Link to='/' className='HeaderLink'>Biblioteca</Link> </Nav.Link>
    
    <img className="HeaderLogo" src="https://cdn-icons-png.flaticon.com/512/4703/4703487.png"/>
    <Nav.Link> <Link to='/'className='HeaderLink'>Laboratorio</Link> </Nav.Link>

    <img className="HeaderLogo" src="https://cdn-icons-png.flaticon.com/512/4743/4743919.png"/>
    <Nav.Link> <Link to='/'className='HeaderLink'>Secretaria</Link> </Nav.Link>
    
    <img className="HeaderLogo" src="https://cdn-icons-png.flaticon.com/512/1940/1940690.png"/>
    <Nav.Link> <Link to='/'className='HeaderLink'>Alunos e Professores</Link> </Nav.Link>
  
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default index