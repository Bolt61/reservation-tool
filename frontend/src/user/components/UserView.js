import React, { Component } from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import ReservationTable from './ReservationTable';

class UserView extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Panel>
              <Panel.Body>
                <h1>User Administration</h1>
                <ReservationTable/>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default UserView;
