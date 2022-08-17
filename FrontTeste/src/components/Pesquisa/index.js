import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiOutlineSearch } from "react-icons/ai";
import './style.css'

function index() {
  return (
    <>

      <InputGroup className="mb-3">
        <Form.Control
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          <AiOutlineSearch/>
        </Button>
      </InputGroup>

      
    </>
  );
}

export default index;
