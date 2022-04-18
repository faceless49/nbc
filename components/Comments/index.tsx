import React, { FC } from 'react';

import { Comment } from 'antd';

import { CommentsType, ReturnComponentType } from 'types';

type CommentsProps = {
  comments: CommentsType[];
};

/**
 * Component for showing comments(antd component) of the profile photo.
 *
 * @component
 * @example
 * const name = 'Vasya'
 * const body = 'Glad to see you. Nice picture!'
 * return (
 *   <Comment author={name} content={body} />
 * )
 */
export const Comments: FC<CommentsProps> = ({ comments }): ReturnComponentType => (
  <>
    {comments.map(({ body, name, id }) => (
      <Comment key={id} author={name} content={<p>{body}</p>} />
    ))}
  </>
);
