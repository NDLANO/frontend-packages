import React from 'react';
import styled from '@emotion/styled';
import { mq, breakpoints, spacing } from '@ndla/core';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import FrontpageCombinedSubjects from './FrontpageCombinedSubjects';

const StyledSection = styled.section`
  margin: 0 auto;
  max-width: 940px;
  padding: 0;
`;

const StyledSubjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  padding: 0;
  max-width: 940px;
  margin: ${spacing.small} auto 0 auto;
  ${mq.range({ from: breakpoints.tablet })} {
    margin: ${spacing.large} auto ${spacing.normal} auto;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    margin: ${spacing.spacingUnit * 6}px auto ${spacing.large};
  }
`;

type Props = {
  categories: any;
  categoryIllustrations: any;
  categoryIllustrationsInModal: any;
}

const FrontpageCircularSubjectsSection: React.FunctionComponent<Props> = injectT(
  ({ categories, categoryIllustrations, categoryIllustrationsInModal, t }) => (
    <StyledSection>
      <StyledSubjects>
        <FrontpageCombinedSubjects
          illustrationUrl={categoryIllustrations['kombinert']}
          categoryIllustrations={categoryIllustrations}
          categoryIllustrationsInModal={categoryIllustrationsInModal}
          categories={categories}
        />
      </StyledSubjects>
    </StyledSection>
  )
);

export default injectT(FrontpageCircularSubjectsSection);
