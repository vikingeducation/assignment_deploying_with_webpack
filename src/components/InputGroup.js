import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default class InputGroup extends React.Component {
  render() {
    const { onKeyHandler } = this.props;
    return (
      <Input
        type="text"
        name="city"
        id="city"
        placeholder="type a city"
        onKeyUp={onKeyHandler}
      />
    );
  }
}
