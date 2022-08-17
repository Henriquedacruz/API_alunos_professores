import React from 'react'
import { Card, CardGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {BsFillEyeFill, BsFillHandThumbsUpFill, BsFillFileEarmarkCheckFill} from 'react-icons/bs'

import './style.css'


function index() {
  return (
  <CardGroup  className = 'CardG'>

  <Link to ='/Avaliacao' className='CardLink'>
  <Card className = 'ItemCard1'>
      <BsFillFileEarmarkCheckFill size = {'4em'} /> 
      <Card.Title >Avaliações</Card.Title>
  </Card>
  </Link>

  <Link to ='/FeedBack' className='CardLink'>
  <Card className = 'ItemCard1'>
    <BsFillHandThumbsUpFill size = {'4em'} /> 
    <Card.Title className=''>FeedBack</Card.Title>
  </Card>
  </Link>

  <Link to ='/Observatorio' className='CardLink'>
  <Card className = 'ItemCard1'>  
    <BsFillEyeFill size = {'4em'} />
    <Card.Title className=''>Observatorio</Card.Title>
  </Card>
  </Link>


  </CardGroup> 
  
  
  

  ) 
}

export default index