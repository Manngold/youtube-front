import React from 'react';
import Comment from '../comment/comment';
import styles from './comment_list.module.css';
const CommentList = ({ comments }) => (
  <ul className={styles.container}>
    {comments.map((comment) => (
      <Comment comment={comment} key={comment.id} />
    ))}
  </ul>
);

export default CommentList;
