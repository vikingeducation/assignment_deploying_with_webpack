import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { getStarWars } from "../actions";

class People extends Component {
  componentDidMount() {
    this.props.getStarWars();
  }

  render() {
    const gallery = this.props.entities.map((entity, index) => {
      return (
        <p key={index}>
          {entity.name} {entity.height} {entity.gender} {entity.birth_year}{" "}
        </p>
      );
    });
    return (
      <div>
        {this.props.isFetching ? <p>Loading...</p> : <div>{gallery}</div>}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    entities: state.starWarsReducer.entities
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getStarWars: () => {
      dispatch(getStarWars());
    }
  };
};

const PeopleContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(People)
);
export default PeopleContainer;
