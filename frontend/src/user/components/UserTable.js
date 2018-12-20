import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from 'react-bootstrap';
import { getUserList } from '../store/User.Action';

const TABLE_COLUMNS = ['Username', 'Fist Name', 'Last Name', 'E-Mail'];

class UserTable extends Component {

  fillTable = (userList) => {
    userList.map((element) => {
      const row = element.map((item) => {
        return <td>{item}</td>
      });
      return <tr>{row}</tr>
    });
  };

  render() {
    const { userList } = this.props;

    return (
      <div>
        <Table responsive>
          <thead>
          <tr>
            <th/>
            {TABLE_COLUMNS.map((name, index) => {
              return <th key={index}>{name}</th>;
            })}
          </tr>
          </thead>
          <tbody>{this.fillTable(userList)}</tbody>
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

