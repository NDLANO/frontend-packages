import React from 'react';
import { LinkProps } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors, fonts } from '@ndla/core';
import { injectT, tType } from '@ndla/i18n';
import SafeLink from '@ndla/safelink';
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

const StyledSafeLink = styled(SafeLink)<LinkProps>`
  color: ${colors.text.light};
`;

type Props = {
  contentUrl?: string;
};

const CreatedBy = ({ contentUrl, t }: Props & tType) => (
  <Container>
    <Wrapper>
      <Text>
        {contentUrl ? (
          <StyledSafeLink to={contentUrl}>
            {t('createdBy.content')}
          </StyledSafeLink>
        ) : (
          t('createdBy.content')
        )}
        &nbsp;{t('createdBy.text')}&nbsp;
        <StyledSafeLink to={`https://ndla.no`}>NDLA</StyledSafeLink>
      </Text>
      <Logo label={`NDLA`} to={`https://ndla.no`} />
    </Wrapper>
  </Container>
);

export default injectT(CreatedBy);
