import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CalendarChooser from './components/CalendarChooser';
import { getHello } from './store/Hello.Action';

class ReservationManager extends Component {

  render() {
    const { message, boundGetHelloMessage } = this.props;
    return (
      <div>
        <h1>Das Reservationssystem</h1>
        <CalendarChooser
          message={message}
          boundGetHelloMessage={boundGetHelloMessage}
        />
      </div>
    );
  }
}

ReservationManager.propTypes = {
  message: PropTypes.string,
  boundGetHelloMessage: PropTypes.func
};

export default connect((store) => {
  return {
    message: store.helloReducer.message
  };
}, (dispatch) => {
  return {
    boundGetHelloMessage: bindActionCreators(getHello, dispatch)
  }
})(ReservationManager);


