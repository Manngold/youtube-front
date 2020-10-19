import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Detail = () => {
  const {
    search: unparsedId,
    state: { channelTitle, description, publishedAt, title, videos },
  } = useLocation();
  const { id: videoId } = queryString.parse(unparsedId);
  return (
    <>
      <div className='video-container'>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
        <div className='info'>
          <span>{title}</span>
          <span>{channelTitle}</span>
          <span>{publishedAt}</span>
          <p>{description}</p>
        </div>
      </div>
      <ul className='popular-video'>
        {videos && videos.length !== 0
          ? videos.map((video) => {
              const {
                id,
                snippet: {
                  title,
                  channelTitle,
                  thumbnails: {
                    default: { url },
                  },
                },
              } = video;
              return id !== videoId ? (
                <li key={Date.now() + Math.random()}>
                  <img src={url} />
                  <span>{title}</span>
                  <span>{channelTitle}</span>
                </li>
              ) : (
                <></>
              );
            })
          : 'No Data'}
      </ul>
    </>
  );
};

export default Detail;
