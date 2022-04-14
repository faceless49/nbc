import React, { FC } from 'react';

import { Comment } from 'antd';

import { CommentsType, ReturnComponentType } from 'types';

type CommentsProps = {
  comments: CommentsType[];
};

export const Comments: FC<CommentsProps> = ({ comments }): ReturnComponentType => (
  <>
    {comments.map(({ body, name, id }) => (
      <Comment key={id} author={name} content={<p>{body}</p>} />
    ))}
  </>
);
