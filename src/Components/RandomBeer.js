import React, { Component } from 'react';
import axios from 'axios';

export default class RandomBeer extends Component {
  componentDidMount = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      );
      this.props.history.push(`/beers/${response.data._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return <div>...</div>;
  }
}
