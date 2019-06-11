import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { mq, breakpoints, spacing } from '@ndla/core';
import { injectT } from '@ndla/i18n';
import FrontpageCircularSubject from './FrontpageCircularSubject';
import FrontpageCombinedSubjects from './FrontpageCombinedSubjects';
import SectionHeading from '../SectionHeading';

const StyledSection = styled('section')`
  margin: 0 auto;
  max-width: 1150px;
  padding: 0 ${spacing.normal};
`;

const StyledSubjectLink = styled('div')`
  width: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: ${spacing.small} 0;
  position: relative;

  ${mq.range({ from: breakpoints.tablet })} {
    display: none;
  }
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
          {categories.mobile.map(category => (
            <StyledSubjectLink key={category}>
              <FrontpageCircularSubject
                link="/"
                textValue={t(`welcomePage.category.${category}`)}
                illustrationUrl={categoryIllustrations[category]}
              />
            </StyledSubjectLink>
          ))}
          <FrontpageCombinedSubjects
            illustrationUrl={categoryIllustrations['kombinert']}
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
