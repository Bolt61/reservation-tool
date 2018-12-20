import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel, Button, Modal, FormGroup, FormControl } from 'react-bootstrap';
import { TABLE_COLUMNS, TABLE_ROWS} from '../../utils/constants';
import ReservationView from './ReservationView';

const PAYLOAD = [{groupName: 'SC Adelboden', responsible: 'reto.daepp@gmail.com', amountAthletes: 5},
  {groupName: 'SC Diemtigen', responsible: 'ramon.zehnhäusern@gmail.com', amountAthletes: 2}
];

class DetailView extends Component {

  state = {
    showConfirmation: false,
    amount: 0
  };

  hideConfirmation = () => {
    this.setState({
      showConfirmation: false
    })
  };

  showConfirmation = () => {
    this.setState({
      showConfirmation: true
    })
  };

  handleChange = (e) => {
    this.setState({
      amount: e.target.value
    })
  };

  getValidationState = () => {
    const { amount } = this.state;
    const { athletesLeft } = this.props;

    const parsed = parseInt(amount);

    if (parsed > 0 && parsed <= athletesLeft) {
      return 'success';
    }
    return 'error';
  };

  createReservation = () => {
    if(this.getValidationState() === 'success') {
      const { amount } = this.state;
      const parsed = parseInt(amount);
      console.log('Created reservation for ' + parsed + " athletes");

      this.setState({
        showConfirmation: false
      })
    }
  };

  render() {
    const { coordinates } = this.props;
    const { amount, showConfirmation } = this.state;
    return (
      <div>
        <Panel bsStyle='primary'>
          <Panel.Heading>
            <Panel.Title componentClass='h3'>
              {
                TABLE_COLUMNS[coordinates.y] + ': ' + TABLE_ROWS[coordinates.x]
              }
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            {PAYLOAD.map((reservation, index) => {
              return (<ReservationView
                key={index}
                groupName={reservation.groupName}
                responsible={reservation.responsible}
                amountAthletes={reservation.amountAthletes}
              />)
            })}
            <Button bsStyle="primary" block onClick={this.showConfirmation}>Reservation Erstellen</Button>
          </Panel.Body>
        </Panel>
        <Modal show={showConfirmation} onHide={this.hideConfirmation}>
          <Modal.Header closeButton>
            <Modal.Title>Reservation Erstellen</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                <FormControl type="text" value={amount} placeholder="Gib deine Athletenzahl ein" onChange={this.handleChange} />
                <FormControl.Feedback />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.createReservation}>Erstellen</Button>
            <Button onClick={this.hideConfirmation}>Schliessen</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

DetailView.propTypes = {
  coordinates: PropTypes.object,
  athletesLeft: PropTypes.number
};

export default DetailView;
