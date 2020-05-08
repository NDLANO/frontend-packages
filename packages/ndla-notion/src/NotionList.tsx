// eslint-disable
import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@ndla/core';
// @ts-ignore
import { injectT } from '@ndla/i18n';

const ListWrapper = styled.div`
  border: 1px solid ${colors.brand.light};
  padding: 32px 40px;
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

interface INotionOption {
  isList: boolean;
}

const NotionList = ({ children, t }: Props) => {
  return (
    <ListWrapper>
      <h3>{t('notions.listheading')}</h3>
      <List>
        {React.Children.map(children, (child: React.ReactChild) => {
          if (!React.isValidElement(child)) {
            return child;
          }
          return React.cloneElement(child, { isList: true } as INotionOption);
        })}
      </List>
    </ListWrapper>
  );
};

export default injectT(NotionList);
