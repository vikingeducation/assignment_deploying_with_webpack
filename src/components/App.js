import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Breeds from './Breeds';
import Breed from './Breed';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from='/' to='/breeds'/>
          <Route path="/breeds" component={Breeds} />
          <Route path="/breed/:name" component={Breed} />
          <Route render={() => <h1 className="text-center">404 - Page Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
