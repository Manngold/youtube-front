import React from 'react';
import styles from './video_item.module.css';
const VideoItem = ({
  video: {
    snippet: {
      title,
      channelTitle,
      thumbnails: {
        medium: { url },
      },
    },
    id,
  },
  onSelect,
  video,
}) => (
  <li className={styles.video_item} onClick={() => onSelect(video)}>
    <img src={url} alt='video thumbnail' />
    <div className={styles.video_info}>
      <span className={styles.video_title}>{title}</span>
      <span className={styles.video_channel}>{channelTitle}</span>
    </div>
  </li>
);

export default VideoItem;
