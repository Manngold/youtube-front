import React from 'react';

const VideoItem = ({
  video: {
    snippet: {
      title,
      channelTitle,
      thumbnails: {
        medium: { url },
      },
    },
  },
  id,
}) => (
  <li key={id}>
    <img src={url} />
    <span>{title}</span>
    <span>{channelTitle}</span>
  </li>
);

export default VideoItem;
