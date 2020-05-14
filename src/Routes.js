import React from 'react';
import { Route, Switch } from 'react-router-dom';

// SCREENS
import HomePage from './screens/HomePage';



class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/rf' component={HomePage} />
        
        <Route
          render={function() {
            return <h1>Página não encontrada</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
