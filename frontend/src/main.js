import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import App from './app/App';
import routes from './routes';

export default class Main extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router>
            <App>
              {routes}
            </App>
          </Router>
        </div>
      </Provider>
    );
  }
}

Main.propTypes = {
  store: PropTypes.object.isRequired
};
