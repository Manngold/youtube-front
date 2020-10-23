import React from 'react';
import styles from './video_detail.module.css';
import CommentList from '../comment_list/comment_list';

const VideoDetail = ({
  video: {
    id,
    snippet: { title, description, channelTitle },
  },
  comments,
}) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.detail_container}>
        <iframe
          className={styles.detail_video}
          title={title}
          type='text/html'
          src={`https://www.youtube.com/embed/${id}`}
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
      <CommentList comments={comments} />
    </div>
  );
};

export default VideoDetail;
