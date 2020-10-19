import React, { useState, useEffect } from 'react';
import { dateFixer } from '../../fixer';
import { searchByValue } from '../../api';
import { useLocation, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import styles from './searchResult.module.css';

const SearchResult = ({ history }) => {
  const [searchData, setSearchData] = useState([]);
  const { search: unparsedQuery } = useLocation();
  const { q: query } = queryString.parse(unparsedQuery);
  useEffect(() => {
    searchByValue(query).then((result) => setSearchData(result.items));
  }, [query]);
  const getVideo = (
    videoId,
    channelTitle,
    publishedAt,
    title,
    description,
    videos
  ) => {
    history.push({
      pathname: `/watch?id=${videoId}`,
      state: { channelTitle, publishedAt, title, description, videos },
    });
  };

  return (
    <ul>
      {searchData && searchData.length !== 0 ? (
        searchData.map((data) => {
          const {
            id: { videoId },
            snippet: {
              channelTitle,
              publishedAt,
              thumbnails: {
                medium: { url },
              },
              title,
              description,
            },
          } = data;
          return (
            <li className={styles.container} key={Date.now() + Math.random()}>
              <img
                src={url}
                className={styles.thumbnail}
                onClick={() =>
                  getVideo(
                    videoId,
                    channelTitle,
                    publishedAt,
                    title,
                    description,
                    searchData
                  )
                }
              />
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

export default withRouter(SearchResult);
