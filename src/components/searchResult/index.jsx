import React, { useState, useEffect } from 'react';
import { dateFixer } from '../../fixer';
import { searchByValue } from '../../api';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const SearchResult = () => {
  const [searchData, setSearchData] = useState([]);
  const { search: unparsedQuery } = useLocation();
  const { q: query } = queryString.parse(unparsedQuery);
  useEffect(() => {
    console.log(query);
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
            <li>
              <img src={url} />
              <div>
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
