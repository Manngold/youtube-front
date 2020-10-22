import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ onSearch, setSelectedVideo }) => {
  const inputRef = useRef(null);
  const searchHandler = () => {
    const query = inputRef.current.value;
    onSearch(query);
  };
  const onClick = (e) => {
    searchHandler();
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchHandler();
    }
  };
  const onLogoClick = () => {
    setSelectedVideo(null);
  };
  return (
    <header className={styles.header_container}>
      <i
        className={`fab fa-youtube ${styles.header_logo}`}
        onClick={onLogoClick}
      />
      <span className={styles.header_title}>Youtube</span>
      <input
        ref={inputRef}
        type='search'
        placeholder='검색'
        className={styles.header_input}
        onKeyPress={onKeyPress}
      />
      <button type='submit' className={styles.header_search} onClick={onClick}>
        <i className={`fas fa-search`}></i>
      </button>
    </header>
  );
};

export default SearchHeader;
