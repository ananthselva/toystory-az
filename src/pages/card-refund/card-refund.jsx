import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './card-refund.scss'

function Cardrefund() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (

    <div className="form_full">
      <div className="container">

    <h1 className="card_name">Card Refund Form</h1> 
  

    <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-5 col-md-5">
    
        <div className="border_area">
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 justify-content-center">
        <Form.Group as={Col} md="10" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            defaultValue=""
          />
            <Form.Control.Feedback type="invalid">
              Please enter a name.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        

        <Row className="mb-3 justify-content-center">
        <Form.Group as={Col} md="10" controlId="validationCustom02">
          <Form.Label>Takeaway Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Takeaway Name"
            defaultValue=""
          />
           <Form.Control.Feedback type="invalid">
              Please enter a Takeaway name.
            </Form.Control.Feedback>
           </Form.Group>
           </Row>
          
        

           <Row className="mb-3 justify-content-center">
        <Form.Group as={Col} md="10" controlId="validationCustomUsername">
          <Form.Label>Order Number</Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="text"
              placeholder="Order Number"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
            Please enter a Order Number.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Row>


     

      <Row className="mb-3 justify-content-center">
        <Form.Group as={Col} md="10" controlId="validationCustom03">
          <Form.Label>Order Date</Form.Label>
          <Form.Control type="date" placeholder="" required />
          <Form.Control.Feedback type="invalid">
            Please enter a valid date.
          </Form.Control.Feedback>
        </Form.Group>

        </Row>

        <Row className="mb-3 justify-content-center"> 
        <Form.Group as={Col} md="10" controlId="validationCustom05">
          <Form.Label>Refund Amount</Form.Label>
          <Form.Control type="text" placeholder="Refund Amount" required />
          <Form.Control.Feedback type="invalid">
            Please enter a  amount.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>


        <Row className="mb-3 justify-content-center"> 
        <Form.Group as={Col} md="10" controlId="validationCustom05">
          <Form.Label>Refund Reason</Form.Label>
          <Form.Control as="textarea" type="text" placeholder="Refund Reason" required/>
          <Form.Control.Feedback type="invalid">
            Please provide a reason.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>



      
      <Button type="submit">CONFIRM</Button>
    </Form>
    </div>
    </div>
    </div>  
    </div>
    </div>
  );
}

export default Cardrefund;