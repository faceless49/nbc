import React, { FC } from "react";

import { PageHeader } from "antd";

import { ReturnComponentType } from "types";

type HeaderProps = {
  onPrevPageClick?: () => void;
  title: string;
};

export const Header: FC<HeaderProps> = ({
  onPrevPageClick,
  title,
}): ReturnComponentType => (
  <PageHeader className="site-page-header" onBack={onPrevPageClick} title={title} />
);
