import React, { Component } from 'react';
import IdleTimer from 'react-idle-timer';
import Header from './Header';

const TIMEOUT = 60 * 60 * 1000; //60 minutes

class App extends Component {

  onIdle = () => {
    window.location.href = '/logout';
  };

  render() {
    const { children } = this.props;
    return (
    <div>
      <IdleTimer
        onIdle={this.onIdle}
        timeout={TIMEOUT}
      />
      <Header />
      {children}
    </div>
    );
  }
}

export default App;
