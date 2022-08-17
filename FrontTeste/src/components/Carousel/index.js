import React from 'react'
import { Carousel } from 'react-bootstrap'
import './style.css'


function index() {
  return (
    <Carousel className='caro'>
  <Carousel.Item>
    <img
      className="w-100"
      src="https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/etec-embu-400x300.jpg"
      
    />
    <Carousel.Caption>
    ETEC DE EMBU
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" w-100"
      src="https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/etec-embu-400x300.jpg"
      
    />

    <Carousel.Caption>
     ETEC DE EMBU
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" w-100"
      src="https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/etec-embu-400x300.jpg"
      
    />

    <Carousel.Caption>
    ETEC DE EMBU
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default index