import React, { useRef } from 'react';
import { SearchByValue } from '../api';

const Header = ({ setSearchData }) => {
  const searchResult = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const query = searchResult.current.value;
    SearchByValue(query).then((result) => setSearchData(result.items));
  };
  return (
    <>
      <i className='fab fa-youtube' />
      Youtube
      <form onSubmit={search}>
        <input ref={searchResult} type='text'></input>
        <button>Search</button>
      </form>
    </>
  );
};

export default Header;
