import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from 'react-bootstrap';
import { getReservations } from '../../reservation/store/Reservation.Action';
import ReservationModal from '../../reservation/components/ReservationModal';

const TABLE_COLUMNS = ['Date', 'Track', 'Time Span', 'Athletes', 'Edit/Delete'];

const PAYLOAD = [
  {id: 3, date: '30.05.2019', track: 'Piste 1', time_span: '10:00-12:00', athletes: 8},
  {id: 8, date: '05.06.2019', track: 'Piste 3', time_span: '14:00-16:00', athletes: 6},
  {id: 14, date: '14.06.2019', track: 'Piste 2', time_span: '12:00-14:00', athletes: 7},
  {id: 343, date: '18.06.2019', track: 'Piste 3', time_span: '10:00-12:00', athletes: 6},
  ];

class ReservationTable extends Component {

  state = {
    showConfirmation: false
  };

  hideConfirmation = () => {
    this.setState({
      showConfirmation: false
    })
  };

  createReservation = (athletes) => {
    console.log('Try to update athletes to ' + athletes);
  };

  editReservation = (id) => {
    console.log('Try to edit ' + id);

    this.setState({
      showConfirmation: true
    })
  };

  deleteReservation = (id) => {
    console.log('Try to delete ' + id);
  };

  getGlyphicons = (id) => {
    return (
      <div>
        <span onClick={(e) => this.editReservation(id)} className="glyphicon glyphicon-edit" aria-hidden="true"/>&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick={(e) => this.deleteReservation(id)} className="glyphicon glyphicon-trash" aria-hidden="true"/>
      </div>
    );
  };

  fillTable = (reservations) => {
    return reservations.map((reservation) => {
      let items = [];

      items.push(<td key={reservation.date}>{reservation.date}</td>);
      items.push(<td key={reservation.track}>{reservation.track}</td>);
      items.push(<td key={reservation.time_span}>{reservation.time_span}</td>);
      items.push(<td key={reservation.athletes}>{reservation.athletes}</td>);
      items.push(<td key={reservation.date + "." + reservation.track + ".edit"}>{this.getGlyphicons(reservation.id)}</td>);
      return <tr key={reservation.id}>{items}</tr>
    });
  };

  render() {

    const { showConfirmation } = this.state;

    return (
      <div>
        <Table responsive striped bordered condensed>
          <thead>
            <tr>
              {TABLE_COLUMNS.map((name, index) => {
                return <th key={index}>{name}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.fillTable(PAYLOAD)}
          </tbody>
        </Table>
        <ReservationModal showConfirmation={showConfirmation} createReservation={this.createReservation} onHide={this.hideConfirmation} athletesLeft={10}/>
      </div>
    );
  }
}

ReservationTable.propTypes = {
  reservations: PropTypes.array,
  boundGetReservations: PropTypes.func
};

export default connect((store) => {
  return {
    reservations: store.reservationReducer.reservations
  }
}, (dispatch) => {
  return {
    boundGetReservations: bindActionCreators(getReservations, dispatch)
  }
})(ReservationTable);

