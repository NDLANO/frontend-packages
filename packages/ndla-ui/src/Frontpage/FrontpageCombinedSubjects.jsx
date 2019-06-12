import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { breakpoints, mq, spacing, colors, fonts } from '@ndla/core';
import SafeLink from '../common/SafeLink';
import FrontpageSubjectIllustration from './FrontpageSubjectIllustration';

const LinkContainer = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${mq.range({ from: breakpoints.desktop })} {
    left: ${spacing.normal};
    right: ${spacing.normal};
  }
`;

const LinkText = styled('span')`
  display: block;
  ${fonts.sizes('20px', '32px')};
  font-weight: bold;
  position: absolute;
  left: 50%;
  bottom: 30%;
  transform: translate(-50%, 50%);
  color: ${colors.subject.dark};

  ${mq.range({ from: breakpoints.desktop })} {
    ${fonts.sizes('22px', '32px')};
  }
`;

const StyledSafeLink = styled(SafeLink)`
  display: block;
  height: 100%;
  width: 23%;
  border-radius: 50%;
  position: relative;
  box-shadow: none;
  z-index: 1;
`;

const StyledIllustrationContainer = styled('div')`
  width: 100%;

  ${mq.range({ from: breakpoints.desktop })} {
    left: ${spacing.normal};
    right: ${spacing.normal};
  }
`;

const Container = styled('nav')`
  display: none;
  width: 100%;
  position: relative;

  ${mq.range({ from: breakpoints.tablet })} {
    display: flex;
  }

  ${mq.range({ from: breakpoints.desktop })} {
    padding: 0 ${spacing.normal};
  }
`;

const FrontpageCombinedSubjects = ({ categories, illustrationUrl }) => {
  const defaultFills = {
    circle1: colors.brand.lighter,
    circle2: colors.brand.lighter,
    circle3: colors.brand.lighter,
  };
  const [fills, setFills] = useState(defaultFills);

  const setIllustrationHoverFill = index => {
    if (index === 'reset') {
      setFills(defaultFills);
      return;
    }
    setFills({
      ...fills,
      [`circle${index + 1}`]: colors.brand.light,
    });
  };

  const toggleFullscreen = () => {
    //open modal?
    console.log('open modal');
  };

  return (
    <Container illustrationUrl={illustrationUrl}>
      <LinkContainer>
        {categories.map((category, i) => (
          <StyledSafeLink
            key={category}
            onPointerEnter={() => setIllustrationHoverFill(i)}
            onPointerLeave={() => setIllustrationHoverFill('reset')}
            onClick={toggleFullscreen}>
            <LinkText>{category}</LinkText>
          </StyledSafeLink>
        ))}
      </LinkContainer>
      <StyledIllustrationContainer>
        <FrontpageSubjectIllustration fill={fills} />
      </StyledIllustrationContainer>
    </Container>
  );
};

FrontpageCombinedSubjects.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  illustrationUrl: PropTypes.string.isRequired,
};

export default FrontpageCombinedSubjects;
