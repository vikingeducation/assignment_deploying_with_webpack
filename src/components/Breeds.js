import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ListGroup, ListGroupItem, Alert } from 'reactstrap';
import { capitalize } from '../helpers';

class Breeds extends Component {
  constructor() {
    super();
    this.state = {
      breeds: [],
      error: null
    };

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        if (!response.ok) throw new Error('No breeds');
        return response.json();
      })
      .then(breedData => {
        this.setState({ breeds: Object.keys(breedData.message) });
      })
      .catch(e => this.setState({ error: e.message }));
  }

  onClick(e) {
    e.preventDefault();
    this.props.history.push(`/breed/${ e.target.text.toLowerCase() }`);
  }

  render() {
    const breedItems = this.state.breeds.map(breed => {
      return <ListGroupItem key={breed} tag="a" onClick={this.onClick} href="">{capitalize(breed)}</ListGroupItem>;
    });

    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="Breeds col-sm-6">
            <h3>All Breeds</h3>
            {this.state.error
              ? <Alert color="danger">{this.state.error}</Alert>
              : null}
            <ListGroup>
              {breedItems}
            </ListGroup>
          </div>
        </div>
      </div>
    );
  }
}

Breeds.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Breeds);
