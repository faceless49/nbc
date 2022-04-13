import React, { FC } from 'react';

import Image from 'next/image';

import { PhotosType, ReturnComponentType } from 'types';

export const Photo: FC<PhotosType> = ({ title, thumbnailUrl }): ReturnComponentType => (
  <Image src={thumbnailUrl} alt={title} width={150} height={150} />
);
