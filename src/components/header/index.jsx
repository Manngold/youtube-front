import React, { useRef } from 'react';
import styles from './header.module.css';
import { withRouter, Link } from 'react-router-dom';

const Header = ({ history }) => {
  const searchResult = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const query = searchResult.current.value;
    history.push(`/search?q=${query}`);
  };
  return (
    <div className={styles.container}>
      <Link className={styles.logo} to='/'>
        <i className='fab fa-youtube' />
      </Link>
      Youtube
      <form className={styles.searchContainer} onSubmit={search}>
        <input ref={searchResult} type='text' placeholder='검색'></input>
        <button>
          <i className='fas fa-search'></i>
        </button>
      </form>
    </div>
  );
};

export default withRouter(Header);
