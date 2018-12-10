import React, { Component } from "react";
import DayPicker from "react-day-picker";
import { Panel, Grid, Row, Col } from "react-bootstrap";

const FIRST_DAY_OF_WEEK = 1;

class CalendarChooser extends Component {

  state = {
    selectedDay: null
  };

  handleSelect = (day, { selected }) => {
    const today = new Date();

    if(day >= today) {
      this.setState({
        selectedDay: selected ? undefined : day,
      });
    }
  };

  render() {
    const today = new Date();

    return (
      <div>
        <Grid>
          <Row>
            <Col>
              <Panel>
                <Panel.Body>
                  <DayPicker
                    selectedDays={this.state.selectedDay}
                    onDayClick={this.handleSelect}
                    disabledDays={{ daysOfWeek: [0, 6], before: today }}
                    firstDayOfWeek={FIRST_DAY_OF_WEEK}
                  />
                </Panel.Body>
              </Panel>
              <Panel bsStyle="primary">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">
                    {
                      this.state.selectedDay
                      ? this.state.selectedDay.toLocaleDateString()
                      : 'No date selected'
                    }
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body>Panel content</Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CalendarChooser;