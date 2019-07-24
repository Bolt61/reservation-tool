import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from 'react-bootstrap';
import { getUserList } from '../store/User.Action';

const TABLE_COLUMNS = ['Username', 'Fist Name', 'Last Name', 'E-Mail', 'Edit/Delete'];

const PAYLOAD = [
  {username: 'admin', firstName: 'Robin', lastName: 'Oester', email: 'robin.oester@gmail.com'},
  {username: 'reto', firstName: 'Reto', lastName: 'Däpp', email: 'reto.daepp@gmail.com'},
  {username: 'rene', firstName: 'Rene', lastName: 'Oester', email: 'rene.oester@sbb.ch'},
  {username: 'rzehn', firstName: 'Ramon', lastName: 'Zehnhäusern', email: 'ramon.zehnhaeusern@gmail.com'},
  ];

class UserTable extends Component {

  editUser = (username) => {
    console.log('Try to edit ' + username);
  };

  deleteUser = (username) => {
    console.log('Try to delete ' + username);
  };

  getGlyphicons = (username) => {
    return (
      <div>
        <span onClick={(e) => this.editUser(username)} className="glyphicon glyphicon-edit" aria-hidden="true"/>&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick={(e) => this.deleteUser(username)} className="glyphicon glyphicon-trash" aria-hidden="true"/>
      </div>
    );
  };

  fillTable = (userList) => {
    return userList.map((user) => {
      let items = [];

      items.push(<td key={user.username}>{user.username}</td>);
      items.push(<td key={user.firstName}>{user.firstName}</td>);
      items.push(<td key={user.lastName}>{user.lastName}</td>);
      items.push(<td key={user.email}>{user.email}</td>);
      items.push(<td key={user.username + ".edit"}>{this.getGlyphicons(user.username)}</td>);
      return <tr key={user.firstName + '.' + user.lastName}>{items}</tr>
    });
  };

  render() {
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
      </div>
    );
  }
}

UserTable.propTypes = {
  userList: PropTypes.array,
  boundGetUserList: PropTypes.func
};

export default connect((store) => {
  return {
    userList: store.userReducer.userList
  }
}, (dispatch) => {
  return {
    boundGetUserList: bindActionCreators(getUserList, dispatch)
  }
})(UserTable);

