import React from 'react';
import {InputGroup, Input} from 'reactstrap';

export default class SearchInput extends React.Component {
  render() {
    const {onKeyHandler} = this.props;
    return (
      <InputGroup>
        <Input
          type="text"
          name="city"
          id="city"
          placeholder="type a city"
          onKeyUp={onKeyHandler}
        />
      </InputGroup>
    );
  }
}
