// eslint-disable
import React from 'react';
import styled from '@emotion/styled';
import { colors } from '@ndla/core';

const ListWrapper = styled.div`
  border: 1px solid ${colors.brand.light};
  padding: 32px;
  h3 {
    color: #444444;
    font-size: 20px;
    margin-top: 0;
  }
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;
type Props = {
  children: JSX.Element;
};

interface INotionOption {
  isList?: boolean;
}

const NotionList = ({ children }: Props) => {
  return (
    <ListWrapper>
      <h3>Begreper</h3>
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

export default NotionList;
