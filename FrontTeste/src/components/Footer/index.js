import React from 'react'
import { Container, Navbar} from 'react-bootstrap'
import './style.css'


function index() {
  return (
    <>
      <Navbar bg="light" className = 'Footer'>
        <Container>
          <Navbar.Text>@Direitos autorais pertencentes ao grupo de alunos e professores</Navbar.Text>
        </Container>
      </Navbar>
    </>

 
  )
}

export default index