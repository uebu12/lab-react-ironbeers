import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import BeerList from './Components/BeerList';
import NavBar from './Components/NavBar';
import BeerDetail from './Components/BeerDetail';
import RandomBeer from './Components/RandomBeer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={BeerList} />
          <Route exact path="/beers/:id" component={BeerDetail} />
          <Route exact path="/random-beer" component={RandomBeer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
