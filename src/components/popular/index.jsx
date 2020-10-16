import React, { useState, useEffect } from 'react';
import { getPopular } from '../../api';
import { dateFixer } from '../../fixer';
import styles from './popular.module.css';

const Popular = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getPopular().then((result) => setVideos(result.items));
  }, []);
  return (
    <ul>
      {videos.map((video) => {
        const {
          snippet: {
            channelTitle,
            publishedAt,
            thumbnails: {
              high: { url },
            },
            title,
          },
        } = video;
        return (
          <li className={styles.video} key={Date.now() + Math.random()}>
            <img src={url} />
            <div className={styles.info}>
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

export default Popular;
