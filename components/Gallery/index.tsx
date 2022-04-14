import { FC } from 'react';

import Col from 'antd/lib/grid/col';
import Row from 'antd/lib/grid/row';
import Link from 'next/link';

import { Photo } from '../Photo';

import { PhotosType } from 'types';
import { GUTTER_COLUMN, GUTTER_ROW } from 'vars';

type GalleryPropsType = {
  photos: PhotosType[];
};

export const Gallery: FC<GalleryPropsType> = ({ photos }) => (
  <Row gutter={[GUTTER_COLUMN, GUTTER_ROW]}>
    {photos.map(({ id, url, thumbnailUrl, title, ...restProps }) => (
      <Col key={id} span={7} offset={1}>
        <Link href={`/photo/${id}`} passHref>
          <a href={`/photo/${id}`}>
            <Photo
              thumbnailUrl={thumbnailUrl}
              url={url}
              title={title}
              {...restProps}
              id={id}
            />
          </a>
        </Link>
      </Col>
    ))}
  </Row>
);
