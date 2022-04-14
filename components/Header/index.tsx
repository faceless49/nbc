import React, { FC } from 'react';

import { PageHeader } from 'antd';

import styles from './Header.module.scss';

import { ReturnComponentType } from 'types';

type HeaderProps = {
  onPrevPageClick?: () => void;
  title: string;
};

export const Header: FC<HeaderProps> = ({
  onPrevPageClick,
  title,
}): ReturnComponentType => (
  <PageHeader
    className={styles['site-page-header']}
    onBack={onPrevPageClick}
    title={title}
  />
);
