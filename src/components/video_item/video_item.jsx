import React, { memo } from 'react';
import styles from './video_item.module.css';
const VideoItem = memo(
  ({
    video: {
      snippet: {
        title,
        channelTitle,
        thumbnails: {
          medium: { url },
        },
      },
    },
    onSelect,
    video,
    display,
  }) => (
    <li
      className={
        display === 'list' ? styles.video_item_list : styles.video_item_grid
      }
      onClick={() => onSelect(video)}
    >
      <img
        className={
          display === 'list'
            ? styles.video_thumnail_list
            : styles.video_thumnail_grid
        }
        src={url}
        alt='video thumbnail'
      />
      <div className={styles.video_info}>
        <span className={styles.video_title}>
          {title.length > 60 ? `${title.slice(0, 60)}...` : title}
        </span>
        <span className={styles.video_channel}>{channelTitle}</span>
      </div>
    </li>
  )
);

export default VideoItem;
