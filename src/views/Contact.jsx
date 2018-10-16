import React, { Component, Fragment } from 'react';

import {
  Form,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText
} from 'reactstrap';

class Contact extends Component {
  componentDidMount() {
    document.title = 'Contact | Fayad Alkhadra';
  }
  render() {
    return (
      <Fragment>
        <h2 id="Contact" className="text-center pt-5 description display-4 ">
          Contact
        </h2>
        <Form
          method="POST"
          action="https://formspree.io/fayyad_r22@yahoo.com"
          className="bg-dark  container m-auto"
        >
          <FormGroup>
            <Label for="Name">Name</Label>
            <Input invalid placeholder="Type Your Name" required />
          </FormGroup>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input invalid placeholder="Type Your Email" required />
          </FormGroup>
          <FormGroup>
            <Label for="Message">Message</Label>
            <Input invalid type="textarea" name="text" required />
          </FormGroup>
          <div className="text-center">
            <Button className="mb-5  text-white col-lg-2 col-12 btn btn-outline-danger">
              Send
            </Button>
          </div>
        </Form>
      </Fragment>
    );
  }
}

export default Contact;
