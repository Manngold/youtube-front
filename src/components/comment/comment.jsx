import React from 'react';
import styles from './comment.module.css';

const Comment = ({
  comment: {
    snippet: {
      topLevelComment: {
        snippet: { textDisplay, authorDisplayName, authorProfileImageUrl },
      },
    },
  },
}) => (
  <li className={styles.container}>
    <img
      className={styles.profile}
      src={authorProfileImageUrl}
      alt='profile image'
    />
    <div className={styles.info}>
      <span>{authorDisplayName}</span>
      <span>{textDisplay}</span>
    </div>
  </li>
);

export default Comment;
