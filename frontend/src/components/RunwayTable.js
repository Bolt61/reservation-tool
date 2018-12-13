import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel, Table } from 'react-bootstrap';
import TableElement from './TableElement';
import { STYLE_FULL, STYLE_SOME, STYLE_BLOCKED, STYLE_FREE, TABLE_COLUMNS, TABLE_ROWS } from './TableConstants';
import DetailView from './DetailView';

const PAYLOAD =
  [[{status: STYLE_FULL, display: 8}, {status: STYLE_FREE, display: 0}, {status: STYLE_SOME, display: 4}, {display: 'nein'}],
  [{status: STYLE_BLOCKED, display: 0}, {status: STYLE_BLOCKED, display: 0}, {status: STYLE_BLOCKED, display: 0}, {display: 'ja'}],
  [{status: STYLE_SOME, display: 3}, {status: STYLE_FULL, display: 8}, {status: STYLE_FREE, display: 0}, {display: 'nein'}]
];

class RunwayTable extends Component {

  state = {
    coordinates: undefined
  };

  onClick = (coordinates) => {
    this.setState({
      coordinates: coordinates
    })
  };

  componentDidUpdate(prevProps, prevState) {
    const { selectedDay: prevDay } = prevProps;
    const { selectedDay: currDay } = this.props;
    const { coordinates } = this.state;

    if(prevDay !== currDay && coordinates !== undefined) {
      this.setState({
        coordinates: undefined
      })
    }
  }

  renderPanel = (selectedDay) => {
    const { coordinates } = this.state;
    console.log(selectedDay);
    return (
      <div>
        <Panel bsStyle='primary'>
          <Panel.Heading>
            <Panel.Title componentClass='h3'>
              {
                selectedDay.toLocaleDateString('de-DE')
              }
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            {
              this.renderTable()
            }
          </Panel.Body>
        </Panel>
        {
          coordinates
            ? <DetailView coordinates={coordinates} />
            : undefined
        }
      </div>
    );
  };

  renderTable = () => {
    return (
      <div>
        <Table responsive>
          <thead>
          <tr>
            <th/>
            {TABLE_ROWS.map((name, index) => {
              return <th key={index}>{name}</th>;
            })}
          </tr>
          </thead>
          <tbody>
          {
            PAYLOAD.map((runway, y) => {
              let rows = [];
              rows.push(<TableElement key={'-1:' + y}>{TABLE_COLUMNS[y]}</TableElement>);
              rows.push(runway.map((time, x) => {
                return <TableElement key={x + ':' + y} onClick={this.onClick} coordinates={ {x, y} } status={time.status}>{time.display}</TableElement>;
              }));
              return <tr key={y}>{rows}</tr>;
            })
          }
          </tbody>
        </Table>
      </div>
    );
  };

  render() {
    const { selectedDay } = this.props;
    if(selectedDay) {
      return (
        this.renderPanel(selectedDay)
      );
    }
  }
}

RunwayTable.propTypes = {
  selectedDay: PropTypes.object
};

export default RunwayTable;
