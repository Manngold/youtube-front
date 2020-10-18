import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/header/';
import Popular from './components/popular/';
import SearchResult from './components/searchResult/';
import './app.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Popular />
          </Route>
          <Route path='/search'>
            <SearchResult />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
