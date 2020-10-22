import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ videos, onSelect, display }) => (
  <ul
    className={
      display === 'list'
        ? styles.video_container_list
        : styles.video_container_grid
    }
  >
    {videos.map((video) => (
      <VideoItem
        key={video.id}
        video={video}
        onSelect={onSelect}
        display={display}
      />
    ))}
  </ul>
);

export default VideoList;
