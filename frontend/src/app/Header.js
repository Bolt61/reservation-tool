import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { getPrincipal } from '../user/store/User.Action'

class Header extends Component {

  componentWillMount() {
    const { boundGetPrincipal } = this.props;
    boundGetPrincipal();
  }

  render() {
    const { principal } = this.props;

    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">DasTrainingszentrum</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/#/admin">
              Admin
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={2} href="logout">
              <span className="glyphicon glyphicon-user" aria-hidden="true"/> {principal.userName}
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  principal: PropTypes.object,
  boundGetPrincipal: PropTypes.func
};

export default connect((store) => {
  return {
    principal: store.userReducer.principal
  };
}, (dispatch) => {
  return {
    boundGetPrincipal: bindActionCreators(getPrincipal, dispatch)
  }
})(Header);
