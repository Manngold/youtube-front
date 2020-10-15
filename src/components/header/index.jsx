import React, { useRef } from 'react';
import { SearchByValue } from '../../api';
import styles from './header.module.css';

const Header = ({ setSearchData }) => {
  const searchResult = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const query = searchResult.current.value;
    SearchByValue(query).then((result) => setSearchData(result.items));
  };
  return (
    <div className={styles.container}>
      <i className='fab fa-youtube' />
      Youtube
      <form className={styles.searchContainer} onSubmit={search}>
        <input ref={searchResult} type='text' placeholder='검색'></input>
        <button>
          <i class='fas fa-search'></i>
        </button>
      </form>
    </div>
  );
};

export default Header;
