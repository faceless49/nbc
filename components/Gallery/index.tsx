import { FC } from 'react';

import Col from 'antd/lib/grid/col';
import Row from 'antd/lib/grid/row';
import Link from 'next/link';

import { Photo } from '../Photo';

import { PhotosType } from 'types';
import { GUTTER_COLUMN, GUTTER_ROW } from 'vars';

type GalleryProps = {
  photos: PhotosType[];
};

export const Gallery: FC<GalleryProps> = ({ photos }) => (
  <nav>
    <Row gutter={[GUTTER_COLUMN, GUTTER_ROW]}>
      {photos.map(({ id, url, thumbnailUrl, title, ...restProps }) => (
        <Col key={id} span={7} offset={1}>
          <Link href={`/photo/${id}`}>
            <a aria-label="Open photo" title="Open photo">
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
  </nav>
);
