import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { mq, breakpoints, spacing } from '@ndla/core';
import { injectT } from '@ndla/i18n';
import FrontpageCombinedSubjects from './FrontpageCombinedSubjects';
import SectionHeading from '../SectionHeading';

const StyledSection = styled('section')`
  margin: 0 auto;
  max-width: 1150px;
  padding: 0 ${spacing.normal};
`;

const StyledSubjects = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  padding: 0 ${spacing.normal};
  max-width: 966px;
  margin: 0 auto;
`;

const StyledSectionHeading = styled(SectionHeading)`
  display: none;
  margin: ${spacing.large} 0 ${spacing.small} 0;
  ${mq.range({ from: breakpoints.tablet })} {
    display: block;
  }
`;

const FrontpageCircularSubjectsSection = injectT(
  ({ categories, categoryIllustrations, t }) => {
    return (
      <StyledSection>
        <StyledSectionHeading>
          {t('welcomePage.category.heading')}
        </StyledSectionHeading>
        <StyledSubjects>
          <FrontpageCombinedSubjects
            illustrationUrl={categoryIllustrations['kombinert']}
            categoryIllustrations={categoryIllustrations}
            categoriesMobile={categories.mobile}
            categories={categories.desktop.map(category =>
              t(`welcomePage.category.${category}`),
            )}
          />
        </StyledSubjects>
      </StyledSection>
    );
  },
);

FrontpageCircularSubjectsSection.propTypes = {
  categories: PropTypes.shape({
    mobile: PropTypes.arrayOf(PropTypes.string),
    desktop: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  categoryIllustrations: PropTypes.shape({}).isRequired,
};

export default injectT(FrontpageCircularSubjectsSection);
