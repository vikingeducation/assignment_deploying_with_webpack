import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function CityForm({onSubmit}) {
    return (
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="city">Search by city</Label>
          <Input type="text" name="city" id="city" placeholder="Enter a city" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
}