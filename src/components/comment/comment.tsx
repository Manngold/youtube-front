import React from 'react';
import styles from './comment.module.css';
import { IComment } from '../../types/Comments';

const Comment: React.FC<{ comment: IComment }> = ({ comment }): JSX.Element => {
  const {
    snippet: {
      topLevelComment: {
        snippet: { textDisplay, authorDisplayName, authorProfileImageUrl },
      },
    },
  } = comment;
  return (
    <li className={styles.container}>
      <img
        alt='user profile'
        className={styles.profile}
        src={authorProfileImageUrl}
      />
      <div className={styles.info}>
        <span>{authorDisplayName}</span>
        <span>{textDisplay}</span>
      </div>
    </li>
  );
};

export default Comment;
