import React, { FC } from 'react';

import styles from './Comments.module.scss';

import { CommentsType, ReturnComponentType } from 'types';

type CommentsProps = {
  comments: CommentsType[];
};

export const Comments: FC<CommentsProps> = ({ comments }): ReturnComponentType => (
  <>
    {comments.map(({ body, name, id }) => (
      <div key={id} className={styles.comments_wrap}>
        <h4 className={styles.comments_title}>{name}</h4>
        <p className={styles.comments_inner}>{body}</p>
      </div>
    ))}
  </>
);
