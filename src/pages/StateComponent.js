import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import { Button } from "react-bootstrap";

class StateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "chlo",
      details: {
        addr: "north",
        phone: 9292,
      },
      lastName: "z",
    };
    this.localStateVar = {};

    this.setDirect = this.setDirect.bind(this);
    this.setCorrect = this.setCorrect.bind(this);
    this.setAllCorrect = this.setAllCorrect.bind(this);
    this.setCorrectAnother = this.setCorrectAnother.bind(this);
  }
  componentDidMount() {
    console.log(this.state);
  }

  setDirect() {
    this.setState(
      {
        details: { addr: "WRONG" },
      },
      () => console.log("setDirect", this.state)
    );
  }
  setCorrectAnother() {
    this.localStateVar = this.state;
    this.localStateVar["name"] = "king";
    this.setState(
      (prevState) => ({
        // ...prevState,
        ...this.localStateVar, // updating local var
      }),
      () => console.log("setDirect", this.state)
    );
  }

  setCorrect() {
    this.setState(
      (prevState) => ({
        // object that we want to update
        details: {
          ...prevState.details, // keep all other key-value pairs
          addr: "east", // update value of specific key
        },
      }),
      () => console.log("setCorrect", this.state)
    );
  }

  setAllCorrect() {
    this.setState(
      (prevState) => ({
        // object that we want to update
        ...prevState,
        name: "yuki",
        details: {
          ...prevState.details, // keep all other key-value pairs
          addr: "east", // update value of specific key
        },
      }),
      () => console.log("setCorrect", this.state)
    );
  }

  render() {
    return (
      <div>
        <Button onClick={this.setDirect}>setDirect</Button>
        <Button onClick={this.setCorrect}>setCorrect</Button>
        <Button onClick={this.setAllCorrect}>setAllCorrect</Button>
        <Button onClick={this.setCorrectAnother}>setCorrectAnother</Button>
      </div>
    );
  }
}
export default StateComponent;
