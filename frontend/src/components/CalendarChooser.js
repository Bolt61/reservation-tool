import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import RunwayTable from './RunwayTable';

const FIRST_DAY_OF_WEEK = 1;

const MONTHS = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember',
];
const WEEKDAYS_LONG = [
  'Sonntag',
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag',
  'Samstag',
];
const WEEKDAYS_SHORT = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

class CalendarChooser extends Component {

  state = {
    selectedDay: null
  };

  handleSelect = (day, { selected }) => {
    const today = new Date();

    if(day >= today) {
      this.setState({
        selectedDay: selected ? undefined : day
      });
    }
  };

  render() {
    const today = new Date();
    const { selectedDay } = this.state;

    return (
      <div>
        <Grid>
          <Row>
            <Col>
              <Panel>
                <Panel.Body>
                  <DayPicker
                    locale="de"
                    months={MONTHS}
                    weekdaysLong={WEEKDAYS_LONG}
                    weekdaysShort={WEEKDAYS_SHORT}
                    selectedDays={selectedDay}
                    onDayClick={this.handleSelect}
                    disabledDays={{ daysOfWeek: [0, 6], before: today }}
                    firstDayOfWeek={FIRST_DAY_OF_WEEK}
                  />
                </Panel.Body>
              </Panel>
              {
                selectedDay
                  ? <RunwayTable selectedDay={selectedDay} />
                  : undefined
              }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CalendarChooser;