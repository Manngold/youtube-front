import React from 'react';
import Comment from '../comment/comment';
import styles from './comment_list.module.css';
import { IComments, IComment } from '../../types/Comments';

const CommentList: React.FC<{ comments: IComments }> = ({
  comments,
}): JSX.Element => {
  return (
    <ul className={styles.container}>
      {comments.length === 1 && comments[0] === 'error' ? (
        <h1 className={styles.error}>댓글 사용이 중지되었습니다</h1>
      ) : (
        comments.map((comment: IComment) => (
          <Comment comment={comment} key={comment.id} />
        ))
      )}
    </ul>
  );
};

export default CommentList;
