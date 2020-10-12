import React, { useState, useEffect } from 'react';
import { getPopular } from '../../api';
import styles from './popular.module.css';
const Popular = () => {
  const [videos, setVideos] = useState([]);
  const dateFixer = (date) => {
    const origin = new Date(date);
    const year = origin.getFullYear();
    const month = origin.getMonth() + 1;
    const day = origin.getDate();
    return `${year}.${month}.${day}`;
  };
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