import { FC } from 'react';

import { Card } from 'antd';
import Col from 'antd/lib/grid/col';
import Row from 'antd/lib/grid/row';
import Image from 'next/image';
import Link from 'next/link';

import { PhotosType } from 'types';
import { GUTTER_COLUMN, GUTTER_ROW } from 'vars';

type GalleryProps = {
  photos: PhotosType[];
};

export const Gallery: FC<GalleryProps> = ({ photos }) => (
  <nav>
    <Row gutter={[GUTTER_COLUMN, GUTTER_ROW]}>
      {photos.map(({ id, thumbnailUrl, title }) => (
        <Col key={id} span={7} offset={1}>
          <Link href={`/photo/${id}`}>
            <a title="Open photo page">
              <Card
                cover={<Image alt={title} src={thumbnailUrl} width={150} height={150} />}
                size="small"
                hoverable
                bordered={false}
              >
                <Card.Meta description="www.insta...." />
              </Card>
            </a>
          </Link>
        </Col>
      ))}
    </Row>
  </nav>
);
