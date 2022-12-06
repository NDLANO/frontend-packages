import React, { ElementType, ReactNode } from 'react';
import { css } from '@emotion/react';
import { breakpoints, fonts, mq, spacing } from '@ndla/core';
import { HeadingLevel } from '../types';

const headingStyle = css`
  font-weight: ${fonts.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  ${fonts.sizes('18px', '24px')};
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('20px', '26px')};
  }
`;

const largeHeadingStyle = css`
  margin: 0 0 ${spacing.small} 0;
  ${fonts.sizes('16px', '32px')};
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes('22px')};
  }
`;

interface Props {
  children: ReactNode;
  large?: boolean;
  className?: string;
  headingLevel: HeadingLevel;
}

const SectionHeading = ({ children, large = false, className, headingLevel = 'h2' }: Props) => {
  const Element: ElementType = headingLevel;
  const styles = large ? [headingStyle, largeHeadingStyle] : [headingStyle];
  return (
    <Element css={styles} className={className}>
      {children}
    </Element>
  );
};

export default SectionHeading;
