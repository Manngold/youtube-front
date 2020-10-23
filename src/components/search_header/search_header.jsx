import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch, setSelectedVideo }) => {
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
      <div className={styles.header_logo_container} onClick={onLogoClick}>
        <i className={`fab fa-youtube ${styles.header_logo}`} />
        <span className={styles.header_title}>Youtube</span>
      </div>
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
});

export default SearchHeader;
