import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTER } from './router';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          {ROUTER.map(({ ...rest }) => (
            <Route {...rest} />
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
