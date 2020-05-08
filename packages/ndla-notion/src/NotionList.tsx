import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@ndla/core';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import { NotionContext } from './Notion';

const ListWrapper = styled.div`
  border: 1px solid ${colors.brand.light};
  padding: 32px 40px;
  margin: 32px 0;
  h3 {
    color: #444444;
    font-size: 20px;
    margin-top: 0;
  }
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0 4px;
`;

type Props = {
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
  children: JSX.Element;
};

const NotionList = ({ children, t }: Props) => (
  <ListWrapper>
    <h3>{t('notions.listheading')}</h3>
    <List>
      <NotionContext.Provider value={{ listView: true }}>
        {children}
      </NotionContext.Provider>
    </List>
  </ListWrapper>
);

export default injectT(NotionList);
