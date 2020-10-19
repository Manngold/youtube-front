import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/';
import Popular from './components/popular/';
import SearchResult from './components/searchResult/';
import './app.css';
import Detail from './components/detail/';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Popular />} />
          <Route path='/search' render={() => <SearchResult />} />
          <Route path='/watch' render={() => <Detail />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
