import React, { useState } from "react";

import "./Contact.css";
import Alert from 'react-bootstrap/Alert';

import { ValidationError, useForm } from "@formspree/react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


export const Contact = () => {
  const [show, setShow] = useState(true);


  const [state, handleSubmit] = useForm("xnqreolv");
  if (state.succeeded) {
    // return <p>Thanks for joining!</p>;
    // alert("Thanks for joining!")
   return ( <div>
    <Alert show={show} variant="success">
    <Alert.Heading>Thanks for joining!</Alert.Heading>
    {/* <p>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
      lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
      fermentum.
    </p> */}
    <hr />
    <div className="d-flex justify-content-end">
      <Button onClick={() => setShow(false)} variant="outline-success">
        Close me y'all!
      </Button>
    </div>
  </Alert>
  <Contact/>
   </div>)
  
 
  
   
  }

  return (
    <div>
   
      <div className="totalContact">
        <Form onSubmit={handleSubmit} className="divContact">
          <div id="contectNous"> Contactez-Nous</div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="email1"
              placeholder="Enter email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>

            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              id="message"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            disabled={state.submitting}
            className="btnEmail"
          >
            Submit
          </Button>
        </Form>

      
      </div>
    </div>
  );
};
