import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class BeerList extends Component {
  state = { beers: [] };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      this.setState({ beers: [...response.data] });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        {this.state.beers.map((beer) => {
          return (
            <Link to={`/beers/${beer._id}`}>
              <div className="card">
                <img
                  src={beer.image_url}
                  style={{ width: '100px' }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{beer.name}</h5>
                  <p className="card-text">{beer.tagline}</p>
                  <p className="card-text">Contributed by: {beer.contributed_by}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
export default BeerList;
