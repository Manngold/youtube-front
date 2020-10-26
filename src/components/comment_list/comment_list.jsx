import React from 'react';
import Comment from '../comment/comment';
import styles from './comment_list.module.css';
const CommentList = ({ comments }) => {
  return (
    <ul className={styles.container}>
      {comments.length === 1 && comments[0] === 'error' ? (
        <h1 className={styles.error}>댓글 사용이 중지되었습니다</h1>
      ) : (
        comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))
      )}
    </ul>
  );
};

export default CommentList;
