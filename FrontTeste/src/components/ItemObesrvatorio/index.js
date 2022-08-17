import React from 'react';
import { Card,Button} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';


function index({src,title,text}) {
    return (

      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Link to = '/Observatorio/Detalhes'><Button variant="primary" >Acessar</Button></Link>
      </Card.Body>
    </Card>
    </Col>
  
    ) 
  }
  
  export default index