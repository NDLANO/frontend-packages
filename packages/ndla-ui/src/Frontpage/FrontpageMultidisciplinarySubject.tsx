import React from 'react';
import SafeLink from '@ndla/safelink';
// @ts-ignore
import { Forward } from '@ndla/icons/common';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import SectionHeading from '../SectionHeading';

import {
  Content,
  Illustration,
  StyledSection,
  LinkItem,
  LinkWrapper,
  LinkItems,
  SafeLinkItem,
  SafeLinkItemWrapper,
  StyledText,
  Wrapper,
} from './FrontpageMultidisciplinarySubjectStyle';

type Props = {
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
  url: string;
};

const FrontpageMultidisciplinarySubject: React.FunctionComponent<Props> = ({
  url,
  t,
}) => (
  <StyledSection>
    <Wrapper>
      <Content>
        <SectionHeading large>
          {t('frontpageMultidisciplinarySubject.heading')}
        </SectionHeading>
        <StyledText>{t('frontpageMultidisciplinarySubject.text')}</StyledText>
      </Content>
    </Wrapper>
    <LinkWrapper>
      <SafeLinkItemWrapper className="o-text-link__wrapper o-text-link__wrapper">
        <SafeLink className="o-text-link" to={url}>
          {t('frontpageMultidisciplinarySubject.linkText')}
          <Forward />
        </SafeLink>
      </SafeLinkItemWrapper>
      <Illustration />
      <LinkItems>
        <LinkItem>
          <SafeLinkItem to="/" className="publichealth">
            <span>
              {t('frontpageMultidisciplinarySubject.publicHealthTopic')}
            </span>
          </SafeLinkItem>
        </LinkItem>
        <LinkItem>
          <SafeLinkItem to="/" className="democracy">
            <span>{t('frontpageMultidisciplinarySubject.democracyTopic')}</span>
          </SafeLinkItem>
        </LinkItem>
        <LinkItem>
          <SafeLinkItem to="/" className="sustainable">
            <span>
              {t('frontpageMultidisciplinarySubject.sustainableTopic')}
            </span>
          </SafeLinkItem>
        </LinkItem>
      </LinkItems>
    </LinkWrapper>
  </StyledSection>
);

export default injectT(FrontpageMultidisciplinarySubject);
