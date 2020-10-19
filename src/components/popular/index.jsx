import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { getPopular, data } from '../../api';
import { dateFixer } from '../../fixer';
import styles from './popular.module.css';

const Popular = ({ history }) => {
  const [videos, setVideos] = useState([]);
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
  useEffect(() => {
    getPopular().then((result) => setVideos(result.items));
  }, []);
  return (
    <ul>
      {videos && videos.length !== 0
        ? videos.map((video) => {
            const {
              id: videoId,
              snippet: {
                channelTitle,
                publishedAt,
                thumbnails: {
                  high: { url },
                },
                title,
                description,
              },
            } = video;
            return (
              <li
                className={styles.video}
                key={Date.now() + Math.random()}
                onClick={() =>
                  getVideo(
                    videoId,
                    channelTitle,
                    publishedAt,
                    title,
                    description,
                    videos
                  )
                }
                id={videoId}
              >
                <img src={url} />
                <div className={styles.info}>
                  <span>{channelTitle}</span>
                  <span>{dateFixer(publishedAt)}</span>
                  <span>{title}</span>
                </div>
              </li>
            );
          })
        : 'No Data'}
    </ul>
  );
};

export default withRouter(Popular);
