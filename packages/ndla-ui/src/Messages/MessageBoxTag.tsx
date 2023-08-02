/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from 'react-i18next';

import styled from '@emotion/styled';

const MiniMesssage = styled.div`
  background-color: #f9f4c8;
  text-align: center;
  display: inline-block;
  padding: 5px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

type Props = {
  tagMessage: string;
};
export const MessageBoxTag = ({ tagMessage }: Props) => {
  const { t } = useTranslation();
  return <MiniMesssage>{t(tagMessage)}</MiniMesssage>;
};

export default MessageBoxTag;
