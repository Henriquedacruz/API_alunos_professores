import React from 'react'
import { Card, } from 'react-bootstrap'
import Imagem from '../Imagens/branco.png'
import './style.css'



function index(){
  return (
 
  <Card className = 'CardLogo'>
    <Card.Body>
    <img src={Imagem} className = 'LogoIntec'/>
    <Card.Title>INTEC</Card.Title>
    </Card.Body>
  </Card>

  ) 
}

 export default index
