import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, FormGroup, FormControl, Button } from 'react-bootstrap';

class ReservationModal extends Component {

  state = {
    athletes: 0
  };

  handleChange = (e) => {
    this.setState({
      athletes: e.target.value
    })
  };

  getValidationState = () => {
    const { athletes } = this.state;
    const { athletesLeft } = this.props;

    const parsed = parseInt(athletes);

    if (parsed > 0 && parsed <= athletesLeft) {
      return 'success';
    }
    return 'error';
  };

  createReservation = () => {
    const { createReservation } = this.props;
    if(this.getValidationState() === 'success') {
      const { athletes } = this.state;
      const parsed = parseInt(athletes);

      createReservation(parsed);

      this.setState({
        showConfirmation: false
      })
    }
  };

  render() {

    const { athletes } = this.state;
    const { showConfirmation, onHide } = this.props;

    return (
      <Modal show={showConfirmation} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Reservation Erstellen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
              <FormControl type="text" value={athletes} placeholder="Gib deine Athletenzahl ein" onChange={this.handleChange} />
              <FormControl.Feedback />
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.createReservation}>Erstellen</Button>
          <Button onClick={onHide}>Schliessen</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ReservationModal.propTypes = {
  athletesLeft: PropTypes.number,
  showConfirmation: PropTypes.bool,
  onHide: PropTypes.func,
  createReservation: PropTypes.func
};

export default ReservationModal;