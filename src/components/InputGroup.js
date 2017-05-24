import React from 'react';
import {Form, FormGroup, Label, Input} from 'reactstrap';

export default class InputGroup extends React.Component {
  render() {
    const {onKeyUpHandler} = this.props;
    return (
      <Form>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            type="text"
            name="city"
            id="city"
            placeholder="type a city"
            onKeyUp={onKeyUpHandler}
          />
        </FormGroup>
      </Form>
    );
  }
}
