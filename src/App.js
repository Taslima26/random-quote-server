import React from 'react';

import './App.css';
import FetchQuotes from './components/FetchQuotes';
import SearchQuote from './components/SearchQuote';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact />
          <Route path="/randomquotes" component={FetchQuotes} />
          <Route path="/searchquotes" component={SearchQuote} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
