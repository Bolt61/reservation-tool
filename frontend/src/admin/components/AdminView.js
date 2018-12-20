import React, { Component } from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import UserTable from '../../user/components/UserTable';

class AdminView extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Panel>
              <Panel.Body>
                <h1>User Administration</h1>
                <UserTable />
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default AdminView;
