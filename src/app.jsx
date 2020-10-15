import React, { useState } from 'react';
import Header from './components/header';
import Popular from './components/popular/';
import SearchResult from './components/searchResult/';
import './app.css';

function App() {
  const [searchData, setSearchData] = useState([]);
  console.log(searchData);
  return (
    <>
      <Header setSearchData={setSearchData} />
      {searchData.length > 0 && searchData ? (
        <SearchResult results={searchData} />
      ) : (
        <Popular />
      )}
    </>
  );
}

export default App;
