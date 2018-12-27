import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, ControlLabel, Button } from 'react-bootstrap';

class UserForm extends Component {

  render() {
    return (
      <div>
        <Form horizontal>
          <FormGroup controlId="userName">
            <Col componentClass={ControlLabel} sm={2}>
              Username
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Username" />
            </Col>
          </FormGroup>

          <FormGroup controlId="userFirstName">
            <Col componentClass={ControlLabel} sm={2}>
              Vorname
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Vorname" />
            </Col>
          </FormGroup>

          <FormGroup controlId="userLastName">
            <Col componentClass={ControlLabel} sm={2}>
              Nachname
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Nachname" />
            </Col>
          </FormGroup>

          <FormGroup controlId="userEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="userClub">
            <Col componentClass={ControlLabel} sm={2}>
              Skiclub
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Skiclub" />
            </Col>
          </FormGroup>

          <FormGroup controlId="userPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Passwort
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit">Create</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default UserForm;
