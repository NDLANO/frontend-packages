import React from 'react';
import styled from '@emotion/styled';
import { spacing, mq, breakpoints, colors } from '@ndla/core';
import { injectT } from '@ndla/i18n';
import { WithInjectedTProps } from '@ndla/i18n/lib/injectT';
// @ts-ignore
import { BlocksLight } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
import { MessageBox } from '../MessageBox';
// @ts-ignore
import Logo from '../Logo';

const StyledHeader = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  max-width: 1024px;
  align-items: flex-end;
  ${mq.range({ until: breakpoints.tablet })} {
    padding: ${spacing.normal} ${spacing.normal} ${spacing.spacingUnit * 3}px;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.normal} ${spacing.normal} ${spacing.spacingUnit * 3}px;
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
  ${mq.range({ from: breakpoints.desktop, until: breakpoints.wide })} {
    padding: ${spacing.spacingUnit * 2}px ${spacing.normal}
      ${spacing.spacingUnit * 5}px;
  }
  ${mq.range({ from: breakpoints.wide })} {
    padding: ${spacing.spacingUnit * 2}px ${spacing.normal}
      ${spacing.spacingUnit * 5}px;
  }
`;

const StyledHeaderWrapper = styled.header`
  background: #5f219c;
  color: ${colors.white};
`;

const StyledLogo = styled.div`
  width: 140px;
  box-shadow: none;
  display: flex;

  ${mq.range({ until: breakpoints.tabletWide })} {
    margin-bottom: ${spacing.small};
  }
  ${mq.range({ from: breakpoints.tablet })} {
    width: 180px;
  }

  ${mq.range({ from: breakpoints.desktop })} {
    width: 287px;
  }
`;
const Text = styled.div`
  font-size: 16px;
  margin-top: ${spacing.xxsmall};
  a {
    color: ${colors.white};
    &:hover {
      color: ${colors.white};
    }
  }
`;

export type FFFrontpageHeaderProps = {
  languageOptions: string;
  locale: string;
};

const FFFrontpageHeader: React.FunctionComponent<
  WithInjectedTProps<FFFrontpageHeaderProps>
> = ({ t, children }) => (
  <StyledHeaderWrapper>
    <StyledHeader>
      <MessageBox
        heading={t('fagfornyelse.badge.heading')}
        icon={<BlocksLight className={`c-icon--large`} />}
        backgroundColor={'#5f219c'}>
        <Text>
          {t('fagfornyelse.badge.text')}
          <br />
          <SafeLink to={'https://ndla.no'}>
            {t('fagfornyelse.badge.linkText')}
          </SafeLink>
        </Text>
      </MessageBox>
      <StyledLogo>
        <Logo to="/" label={'NDLA'} large cssModifier={'white'} />
      </StyledLogo>
      {children}
    </StyledHeader>
  </StyledHeaderWrapper>
);

export default injectT(FFFrontpageHeader);
