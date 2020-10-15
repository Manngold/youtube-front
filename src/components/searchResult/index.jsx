import React from 'react';
import { dateFixer } from '../../fixer';

const SearchResult = ({ results }) => {
  return (
    <ul>
      {results.map((result) => {
        const {
          snippet: {
            channelTitle,
            publishedAt,
            thumbnails: {
              medium: { url },
            },
            title,
          },
        } = result;
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
      })}
    </ul>
  );
};

export default SearchResult;
