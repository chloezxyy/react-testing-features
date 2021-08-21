import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import Select from "react-select";
import { Button } from "react-bootstrap";

function DropDown() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [display, setDisplay] = useState("");
  const [text, setText] = useState("");

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const handleButtonClick = () => {
    setDisplay(selectedOption.label);
  };
  const handleButtonClear = () => {
    setSelectedOption(null);
  };
  const handleSelection = (selection) => {
    setSelectedOption(selection);
  };
  const handleText = (e) => {
    if (e.target.validity.valid) {
      setText(e.target.value);
      console.log("tru", e.target.validity);
    }
    console.log(e.target.value);
    console.log(e.target.validity);
  };

  return (
    <div style={{ marginTop: "2%" }}>
      {/* BUTTONS BELOW */}
      <div
        style={{
          // display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="row">
          <Container>
            <Row>
              <Col
                md={2}
                style={{
                  alignSelf: "center",
                  fontWeight: "bold",
                }}
              >
                Entity:
              </Col>
              <Col md={7}>
                <Select
                  options={options}
                  value={selectedOption}
                  // callback func in Select Component
                  onChange={handleSelection}
                />
              </Col>
              <Col md={3}>
                <Button onClick={handleButtonClick} disabled={!selectedOption}>
                  Confirm
                </Button>
                <Button onClick={handleButtonClear}>Clear</Button>
              </Col>
            </Row>
            <Col>
              <Row>Flavour: {display}</Row>
            </Col>
          </Container>
        </div>
        <div
          className="row"
          style={{
            height: "36px",
            // width: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "auto",
            marginTop: "1%",
          }}
        >
          <Container>
            <Row>
              <Button
                style={{
                  width: "200",
                  // height: "36",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={handleButtonClick}
              >
                Display value
              </Button>
              <Button
                style={{
                  width: "200",
                  // height: "36",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // overflow: "auto",
                }}
                onClick={handleButtonClick}
              >
                Display value
              </Button>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
