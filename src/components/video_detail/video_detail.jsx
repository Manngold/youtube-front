import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({
  video: {
    id,
    snippet: { title, description, channelTitle },
  },
}) => (
  <section className={styles.detail_container}>
    <iframe
      className={styles.detail_video}
      type='text/html'
      src={`http://www.youtube.com/embed/${id}`}
      allowFullScreen
      frameBorder='0'
    />
    <div className={styles.detail_info_container}>
      <div className={styles.detail_info}>
        <span>{title}</span>
        <span>{channelTitle}</span>
      </div>
      <pre className={styles.detail_description}>{description}</pre>
    </div>
  </section>
);

export default VideoDetail;
