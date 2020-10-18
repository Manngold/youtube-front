import React, { useState, useEffect } from 'react';
import { dateFixer } from '../../fixer';
import { searchByValue } from '../../api';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import styles from './searchResult.module.css';

const SearchResult = () => {
  const [searchData, setSearchData] = useState([]);
  const { search: unparsedQuery } = useLocation();
  const { q: query } = queryString.parse(unparsedQuery);
  useEffect(() => {
    searchByValue(query).then((result) => setSearchData(result.items));
  }, [query]);

  return (
    <ul>
      {searchData && searchData.length !== 0 ? (
        searchData.map((data) => {
          const {
            snippet: {
              channelTitle,
              publishedAt,
              thumbnails: {
                medium: { url },
              },
              title,
            },
          } = data;
          return (
            <li className={styles.container} key={Date.now() + Math.random()}>
              <img src={url} className={styles.thumbnail} />
              <div className={styles.info}>
                <span>{channelTitle}</span>
                <span>{dateFixer(publishedAt)}</span>
                <span>{title}</span>
              </div>
            </li>
          );
        })
      ) : (
        <div>no data</div>
      )}
    </ul>
  );
};

export default SearchResult;
