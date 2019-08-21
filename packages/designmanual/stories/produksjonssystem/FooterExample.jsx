import React from 'react';
import { Footer } from '@ndla/editor';
import { PopUpWrapper } from '@ndla/forms'; 
import { spacing, colors, typography } from '@ndla/core';
import Button from '@ndla/button';

const options = [
  {
    name: 'hello',
    onClick: () => {},
  },
  {
    name: 'hello1',
    onClick: () => {},
  },
  {
    name: 'hello2',
    onClick: () => {},
  }
];

const FooterExample = () => (
  <Footer>
    <PopUpWrapper
      label="open me"
      verticalPosition="bottom"
      offsetY={spacing.spacingUnit * 2}
    >
      <h1 css={typography.smallHeading}>Heading</h1>
      {options.map(option => (
        <Button link key={option.name} onClick={option.onClick}>
          {option.name}
        </Button>
      ))}
    </PopUpWrapper>
    <Button>
      Click me
    </Button>
  </Footer>
);

export default FooterExample;