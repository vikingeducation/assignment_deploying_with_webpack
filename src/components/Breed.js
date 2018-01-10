import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Alert, CardDeck, Card, CardImg } from 'reactstrap';
import Loader from './Loader';
import { capitalize } from '../helpers';

const items = [];

class Breed extends Component {
  constructor() {
    super();
    this.state = {
      breedImages: [],
      error: null,
      isFetching: true
    };
  }

  componentDidMount() {
    fetch(`https://dog.ceo/api/breed/${ this.props.match.params.name }/images`)
      .then(response => {
        if (!response.ok) throw new Error('Could not fetch');
        return response.json();
      })
      .then(dogImageData => {
        this.setState({
          breedImages: dogImageData.message,
          isFetching: false
        });

        for (let image of dogImageData.message) {
          items.push( { src: image, altText: image });
        }
      })
      .catch(e => this.setState({ error: e.message }));
  }

  render() {
    const imageCards = this.state.breedImages.map(img => {
      return (
        <Card key={img} className="Breed-img-card">
          <CardImg top width="100%" src={img} alt={img} />
        </Card>
      );
    });

    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="Breed col-sm-8">
            <h3>{'Breed:' + capitalize(this.props.match.params.name)}</h3>
            {this.state.error
              ? <Alert color="danger">{this.state.error}</Alert>
              : null}
            {this.state.isFetching
              ? <Loader />
              : (
                <CardDeck>
                  {imageCards}
                </CardDeck>
              )}
          </div>
        </div>
      </div>
    );
  }
}

Breed.propTypes = {
  match: PropTypes.object.isRequired
};

export default withRouter(Breed);
