import React from 'react';
import styles from './comment.module.css';

interface Comment {
  comment: object;
  snippet: Snippet;
}
interface Snippet {
  topLevelComment: LastSnippet;
}

interface LastSnippet {
  snippet: CommentInterface;
}

interface CommentInterface {
  textDisplay: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
}

const Comment: React.FC<{ comment: Comment }> = ({ comment }): JSX.Element => {
  const {
    textDisplay,
    authorDisplayName,
    authorProfileImageUrl,
  }: CommentInterface = comment.snippet.topLevelComment.snippet;
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
