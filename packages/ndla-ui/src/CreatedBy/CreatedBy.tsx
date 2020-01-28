import React from 'react';
import styled from '@emotion/styled';
import { colors, fonts } from '@ndla/core';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import Logo from '../Logo';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  color: ${colors.text.light};
  margin-right: 38px;
  font-family: ${fonts.sans};
  ${fonts.sizes('20px', '20px')};
`;

const Link = styled.a`
  color: ${colors.text.light};
`;

type Props = {
  contentUrl?: string;
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
};

const CreatedBy = ({ contentUrl, t }: Props) => (
  <Container>
    <Wrapper>
      <Text>
        {contentUrl ? (
          <Link href={contentUrl}>{t('createdBy.content')}</Link>
        ) : (
          t('createdBy.content')
        )}
        &nbsp;{t('createdBy.text')}&nbsp;
        <Link href={`https://ndla.no`}>NDLA</Link>
      </Text>
      <Logo label={`NDLA`} to={`https://ndla.no`} />
    </Wrapper>
  </Container>
);

export default injectT(CreatedBy);
