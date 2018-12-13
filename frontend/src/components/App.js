import React, { Component } from 'react';
import CalendarChooser from './CalendarChooser';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Das Reservationssystem</h1>
        <CalendarChooser />
      </div>
    );
  }
}

export default App;