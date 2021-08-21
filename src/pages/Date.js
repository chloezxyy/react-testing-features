import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { Container, Row, Col } from "react-grid-system";
import ls from "local-storage";
import { Button } from "react-bootstrap";
import moment from "moment";

class DateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: new Date(),
      processedInstrumentModel: {},
    };
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.processedInstrumentModel = {};
  }

  componentDidMount() {
    // 2021-08-05T04:40:00.000Z
    let getStartDate = ls.get("startDate");

    // August 4, 2021 12:40 pm
    let formatDate = moment(getStartDate).format("MMMM d, yyyy h:mm a");

    // Wed Aug 04 2021 12:40:00 GMT+0800 (Singapore Standard Time)
    let convertDate = moment(formatDate).toDate();

    console.log("getStartDate", getStartDate, ",", typeof getStartDate);
    console.log("getStartDate", formatDate, ",", typeof formatDate);
    console.log("getStartDate", convertDate, ",", typeof convertDate);

    // if startdate is defined from local storage
    if (getStartDate) {
      this.setState({
        startDate: convertDate,
      });
    }
  }

  componentDidUpdate() {}

  handleDateChange(date) {}

  handleStartChange(date) {
    this.setState(
      { startDate: date },
      console.log("startdate", this.state.startDate)
    );
  }

  handleEndChange(date, evt) {
    let formatDate = moment(date).format("MMMM d, yyyy h:mm a");
    console.log("formatEndDate", date, formatDate);
    this.setState({ endDate: date });
  }

  saveData = () => {
    const { startDate, endDate } = this.state;
    console.log("save start", startDate);

    ls.set("startDate", startDate);
    ls.set("endDate", endDate);
    console.log("save");
  };
  resetData = () => {
    this.setState({ startDate: "" });
    ls.clear();
    console.log("reset start date", this.state.startDate);
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            Start Date
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleStartChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={20}
              timeCaption="time"
              showTimeInput
              dateFormat="MMMM d, yyyy h:mm a"
            />
          </Col>
          <Col>
            End Date
            <DatePicker
              selected={this.state.endDate}
              onChange={this.handleEndChange}
              showTimeSelect
              showTimeInput
              timeFormat="HH:mm"
              timeIntervals={20}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm a"
            />
          </Col>
        </Row>
        <Button onClick={this.saveData}>Save</Button>
        <Button onClick={this.resetData}>Reset</Button>
      </Container>
    );
  }
}

export default DateComponent;
