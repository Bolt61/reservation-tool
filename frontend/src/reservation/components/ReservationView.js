import React, { Component } from 'react';
import { Form, Col, FormGroup, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ReservationView extends Component {

  render() {
    const { groupName, responsible, amountAthletes } = this.props;
    return (
      <div>
        <Form horizontal>
          <FormGroup>
            <Col sm={2}>
              Gruppenname
            </Col>
            <Col sm={10}>
              <FormControl value={groupName} disabled type="text" placeholder="Gruppenname" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>
              Verantwortlicher
            </Col>
            <Col sm={10}>
              <FormControl value={responsible} disabled type="text" placeholder="Verantwortlicher" />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>
              Anzahl Athleten
            </Col>
            <Col sm={10}>
              <FormControl value={amountAthletes} disabled type="text" placeholder="0" />
            </Col>
          </FormGroup>
        </Form>
        <hr />
      </div>
    );
  }
}

export default ReservationView;

ReservationView.propTypes = {
  groupName: PropTypes.string,
  responsible: PropTypes.string,
  amountAthletes: PropTypes.number
};
