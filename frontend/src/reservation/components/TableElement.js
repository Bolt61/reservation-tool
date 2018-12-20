import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { STYLE_FULL, STYLE_FREE, STYLE_BLOCKED, STYLE_SOME } from '../../utils/constants';

class TableElement extends Component {

  getStyle = (status) => {
    let style = '';
    switch (status) {
      case STYLE_FULL:
        style = 'red';
        break;
      case STYLE_BLOCKED:
        style = 'grey';
        break;
      case STYLE_SOME:
        style = 'orange';
        break;
      case STYLE_FREE:
        style = 'green';
        break;
    }
    return style;
  };

  render() {
    const { children, coordinates, status, onClick } = this.props;
    return (
      <td>
        <div
          className={'inner ' + this.getStyle(status)}
          onClick={ onClick !== undefined ? (e) => onClick(coordinates) : undefined}>
          {children}
        </div>
      </td>
    );
  }
}

TableElement.propTypes = {
  coordinates: PropTypes.object,
  status: PropTypes.oneOf([STYLE_FULL, STYLE_FREE, STYLE_BLOCKED, STYLE_SOME]),
  onClick: PropTypes.func
};

export default TableElement;
