import React from 'react';
import styles from './comment.module.css';

interface IComment {
  comment: object;
  snippet: IOuterSnippet;
}
interface IOuterSnippet {
  topLevelComment: IInnerSnippet;
}

interface IInnerSnippet {
  snippet: ICommentInfo;
}

interface ICommentInfo {
  textDisplay: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
}

const Comment: React.FC<{ comment: IComment }> = ({ comment }): JSX.Element => {
  const {
    textDisplay,
    authorDisplayName,
    authorProfileImageUrl,
  }: ICommentInfo = comment.snippet.topLevelComment.snippet;
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
