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

import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({ offset: -60, scrollDuration: 1000 });

class Contact extends Component {
  componentDidMount() {
    document.title = 'Contact | Fayad Alkhadra';
  }
  render() {
    return (
      <ScrollableAnchor id={'Contact'}>
        <div>
          <h2 className="text-center pt-5 description display-4  mt-5">
            Contact
          </h2>
          <Form
            method="POST"
            action="https://formspree.io/fayyad_r22@yahoo.com"
            className="  container m-auto"
          >
            <FormGroup className="form-group ">
              <Label className="form-label" for="Name">
                Name
              </Label>
              <Input
                className="form-control"
                placeholder="Type Your Name"
                required
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Label className="form-label" for="Email">
                Email
              </Label>
              <Input
                className="form-control"
                placeholder="Type Your Email"
                required
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Label className="form-label" for="Message">
                Message
              </Label>
              <Input
                className="form-control"
                type="textarea"
                name="text"
                required
              />
            </FormGroup>
            <div className="text-center">
              <Button className="mb-5 col-lg-2 col-12 btn btn-outline-dark">
                Send
              </Button>
            </div>
          </Form>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Contact;
