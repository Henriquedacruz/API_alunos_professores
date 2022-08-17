import React from 'react'
import { Card,Button} from 'react-bootstrap'
import Col from 'react-bootstrap/Col';

import './style.css'


function index(){
    return(
    <div className='linha'>
        <h5 className='title'>titulo</h5>
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='https://img.freepik.com/free-vector/photo-booth-props-wedding-speech-bubble-frames-doodle-love-heart-frame-mustache-glasses-prop_102902-2270.jpg' />

            </Card>
        </Col>
    </div>
    );
}

export default index;