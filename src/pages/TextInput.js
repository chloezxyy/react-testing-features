import { Container, Row, Col } from "react-grid-system";
import React from "react";

let _rows = {
  securityIdentifiers: [
    {
      label: "Tranche Code",
      component: "input-text",
      fieldMapping: "trancheCode",
      inputPattern: "^[0-9]*$",
    },
    {
      label: "Bond Code",
      component: "input-text",
      fieldMapping: "bondCode",
      inputPattern: "^[0-9]*$",
    },
  ],
};

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trancheCodeInput: "",
      bondCodeInput: "3",
      instrumentModel: {},
    };
    this.processedInstrumentModel = {};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt) {
    let inputTextValue = evt.target.validity.valid
      ? evt.target.value
      : this.state[evt.target.name + "Input"];
    console.log(
      "log",
      evt.target.validity.valid,
      evt.target.value,
      evt.target.name + "Input",
      "inputTextValue: ",
      inputTextValue
    );
    this.setState({
      [evt.target.name + "Input"]: inputTextValue,
    });
    this.processedInstrumentModel[evt.target.name] = inputTextValue;
  }
  render() {
    const renderRows = (rows) => {
      return rows.map((item, reportIdx) => {
        return (
          <Row key={reportIdx}>
            <Col>
              <Col lg={12} className="form-column">
                {item.label}
              </Col>
              <Col lg={12} className="form-column">
                {renderComponent(item)}
              </Col>
            </Col>
          </Row>
        );
      });
    };

    const renderComponent = (rowObj) => {
      if (rowObj.component === "input-text") {
        return (
          <input
            key={"input"}
            type="text"
            name={rowObj.fieldMapping}
            value={this.state[rowObj.fieldMapping + "Input"]}
            pattern={rowObj.inputPattern}
            onChange={this.handleInputChange}
          />
        );
      }
    };
    return (
      <div>
        <Container>
          <Row>{renderRows(_rows.securityIdentifiers)}</Row>
        </Container>
      </div>
    );
  }
}

export default TextInput;
