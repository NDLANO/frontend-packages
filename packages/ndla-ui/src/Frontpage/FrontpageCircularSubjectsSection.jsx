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
  margin: ${spacing.small} auto 0 auto;

  ${mq.range({ from: breakpoints.tablet })} {
    margin: ${spacing.large} auto ${spacing.small} auto;
  }
`;

const FrontpageCircularSubjectsSection = injectT(
  ({ categories, categoryIllustrations, categoryIllustrationsInModal, t }) => {
    return (
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
    );
  },
);

FrontpageCircularSubjectsSection.propTypes = {
  categoryIllustrations: PropTypes.shape({}).isRequired,
  categoryIllustrationsInModal: PropTypes.shape({}).isRequired,
};

export default injectT(FrontpageCircularSubjectsSection);
