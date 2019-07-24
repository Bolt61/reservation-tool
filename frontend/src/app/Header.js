import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import { getPrincipal } from '../user/store/User.Action'

class Header extends Component {

  componentWillMount() {
    const { boundGetPrincipal } = this.props;
    boundGetPrincipal();
  }

  render() {
    const { principal } = this.props;
    const navDropdownTitle = <div style={{display: "inline-block"}}><Glyphicon glyph="user" /> Tester</div>;/**{principal.userName}**/

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
            <NavItem eventKey={1} href="#admin">
              Admin
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={3} title={navDropdownTitle} id="header-dropdown">
              <MenuItem href="#user" eventKey={3.1}>Benutzer</MenuItem>
              <MenuItem divider/>
              <MenuItem href="logout" eventKey={3.2}>Logout</MenuItem>
            </NavDropdown>
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
