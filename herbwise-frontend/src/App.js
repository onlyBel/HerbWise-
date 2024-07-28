import React from 'react';
import HerbList from './components/HerbList';
import HerbDetail from './components/HerbDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HerbList} />
          <Route path="/herb/:id" component={HerbDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

