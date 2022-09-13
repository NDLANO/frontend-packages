import React from 'react';
import { spacing, fonts, animations, colors } from '@ndla/core';
import Button from '@ndla/button/src/ButtonV2';
import styled from '@emotion/styled';
import { Footer, FooterText, EditorName, LanguageSelector } from '@ndla/ui';
import ZendeskButton from '@ndla/zendesk';
import { FeideText, ChevronDown, LogIn, LogOut } from '@ndla/icons/common';
import { useTranslation } from 'react-i18next';
import { feideUserLaerer } from './feideUser';
//@ts-ignore
import { mockFooterLinks } from '../../dummydata/mockFooter';
import { AuthModalExample, AuthModalProps } from './authModalExample';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222222;
  color: #ffffff;
  padding: ${spacing.medium} ${spacing.normal} ${spacing.large};
`;

const Heading = styled.h2`
  margin: 0;
  svg {
    width: 82px;
    height: 28px;
  }
`;

const InfoText = styled.p`
  margin: 0 0 ${spacing.medium};
  font-weight: 300;
  ${fonts.sizes('18px', '32px')};
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${spacing.normal};
`;

const LoginButton = styled(Button)`
  background: #222222;
  border-color: ${colors.text.light};
`;

const StyledLogInIconWrapper = styled.span`
  margin-left: ${spacing.xsmall};
`;

const AuthedButton = styled(Button)`
  color: #ffffff;
  transition: all ${animations.durations.fast} ease-in-out;
  &:hover,
  &:focus,
  &:active {
    color: #222222;
    background: #ffffff;
  }
`;

const FooterAuth = ({ isAuthenticated, user, onAuthenticateClick, ...rest }: AuthModalProps) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Heading aria-label="Feide">
        <FeideText aria-hidden />
      </Heading>
      <StyledButtonWrapper>
        {isAuthenticated ? (
          <AuthModalExample
            {...rest}
            isAuthenticated={isAuthenticated}
            user={user}
            onAuthenticateClick={onAuthenticateClick}
            activateButton={
              <AuthedButton shape="pill" variant="ghost" size="medium">
                {t('user.loggedInAsButton', { role: user?.eduPersonPrimaryAffiliation })}
                <ChevronDown />
              </AuthedButton>
            }
          />
        ) : (
          <>
            <InfoText>{t('user.generalFooter')}</InfoText>
            <LoginButton size="medium" onClick={onAuthenticateClick}>
              {isAuthenticated ? t('user.buttonLogOut') : t('user.buttonLogIn')}
              <StyledLogInIconWrapper aria-hidden>
                {isAuthenticated ? <LogOut className="c-icon--medium" /> : <LogIn className="c-icon--medium" />}
              </StyledLogInIconWrapper>
            </LoginButton>
          </>
        )}
      </StyledButtonWrapper>
    </Wrapper>
  );
};
interface FooterProps {
  inverted?: boolean;
  hideLanguageSelector?: boolean;
  i18n?: any;
  isAuthenticated?: boolean;
}
const FooterExample = ({ inverted, hideLanguageSelector, i18n, isAuthenticated }: FooterProps) => {
  const { t } = useTranslation();
  <Footer
    lang={'nb'}
    links={mockFooterLinks}
    languageSelector={
      !hideLanguageSelector && (
        <LanguageSelector
          alwaysVisible
          outline
          center
          inverted={inverted}
          options={i18n.options.supportedLanguages}
          currentLanguage={i18n.language}
        />
      )
    }
    auth={<FooterAuth isAuthenticated={!!isAuthenticated} user={feideUserLaerer} onAuthenticateClick={() => {}} />}>
    <FooterText>
      <EditorName title="Utgaveansvarlig:" name="Sigurd Trageton" />
      <span>Nettstedet er utarbeidet av NDLA med åpen kildekode.</span>
      <ZendeskButton locale="nb" widgetKey="7401e616-d86d-42f9-b52f-5bad09d03058">
        {t('askNDLA')}
      </ZendeskButton>
    </FooterText>
  </Footer>;
};

export default FooterExample;
