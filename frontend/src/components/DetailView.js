import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import { TABLE_COLUMNS, TABLE_ROWS} from './TableConstants';
import ReservationView from './ReservationView';

const PAYLOAD = [{groupName: 'SC Adelboden', responsible: 'reto.daepp@gmail.com', amountAthletes: 5},
  {groupName: 'SC Diemtigen', responsible: 'ramon.zehnhäusern@gmail.com', amountAthletes: 2}
];

class DetailView extends Component {

  render() {
    const { coordinates } = this.props;
    return (
      <div>
        <Panel bsStyle='primary'>
          <Panel.Heading>
            <Panel.Title componentClass='h3'>
              {
                TABLE_COLUMNS[coordinates.y] + ': ' + TABLE_ROWS[coordinates.x]
              }
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            {PAYLOAD.map((reservation, index) => {
              return (<ReservationView
                key={index}
                groupName={reservation.groupName}
                responsible={reservation.responsible}
                amountAthletes={reservation.amountAthletes}
              />)
            })}
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

DetailView.propTypes = {
  coordinates: PropTypes.object
};

export default DetailView;
